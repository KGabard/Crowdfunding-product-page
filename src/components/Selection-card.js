import { useState } from "react";

function SelectionCard({
    title,
    defaultPledge,
    text,
    rewardsLeft,
    activeCard,
    updateActiveCard,
    optionNumber,
    projectData,
    updateProjectData, 
    isModalDisplay, 
    setModalDisplay,
    greetingsModalElement
}) {
    const [pledgeValue, setPledge] = useState(defaultPledge);
    const pledgeIsValid = !isNaN(Number(pledgeValue)) ? Number(pledgeValue) >= defaultPledge ? true : false : false;
    const cardIsActive = activeCard[optionNumber - 1];
    const cardIsDisabled = rewardsLeft !== undefined ? rewardsLeft <= 0 ? true : false : false;

    function addDonation(amount) {
        updateProjectData({ ...projectData,
          donations: projectData.donations + amount,
          backersNumber: projectData.backersNumber + 1
        });
    }

    function transitionModal(timing) {
        setTimeout(() => {
            setModalDisplay({...isModalDisplay, selection: false, greetings: true});
            greetingsModalElement.current.scrollIntoView({ behavior: 'smooth', block: "center" });
        }, timing);
    }

    return (
        <section className={ `selection-card ${cardIsActive && 'active'} ${cardIsDisabled && 'disabled'}` } onClick={() => {
                if(!cardIsDisabled) {
                    updateActiveCard(activeCard.map((item,index) => {
                        return (index === optionNumber - 1) ? !(rewardsLeft <= 0) ? true : false : false;
                    }));
                }
            }}>
            <div className="selection-card__grid">
                <div className="radio-btn">
                        <div className="radio-btn__check"></div>
                </div>
                <h1 className="selection-card__title">{title}</h1>
                { defaultPledge > 0 &&
                    <h2 className="selection-card__subtitle">{`Pledge $${defaultPledge} or more`}</h2>
                }
                { rewardsLeft !== undefined &&
                    <p className="selection-card__rewards-left">
                        <span className="value">{rewardsLeft}</span>
                        <span className="tag">left</span>
                    </p>
                }
                <p className="selection-card__text">{text}</p>
            </div>
            { cardIsActive &&
            <div className="pledge-container">
                <p className="pledge-container__text">Enter your pledge</p>
                <div className="pledge-input">
                    <p>$</p>
                    <input className="pledge-input__value" value={pledgeValue} onChange={(e) => {
                        setPledge(e.target.value);
                    }}></input>
                </div>
                <div className={ `button button--smaller ${!pledgeIsValid && 'button--disabled'}`} onClick={() => {
                    if(pledgeIsValid) {
                        addDonation(Number(pledgeValue));
                        transitionModal(0);
                    }
                }}>Continue</div>
            </div>
            }
        </section>
    )
}

export default SelectionCard;