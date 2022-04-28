import React from "react"

function RewardCard( {
    title,
    subtitle,
    text,
    rewardsLeft,
    activeCard, 
    updateActiveCard,
    optionNumber, 
    isModalDisplay, 
    setModalDisplay, 
    selectionModalElement
} ) {
    const cardIsDisabled = rewardsLeft !== undefined ? rewardsLeft <= 0 ? true : false : false;

    return(
        <React.Fragment>
            {!cardIsDisabled ? (
                    <section className="reward-card">
                        <h1 className="reward-card__title">{title}</h1>
                        <h2 className="reward-card__subtitle">{subtitle}</h2>
                        <p className="reward-card__text">{text}</p>
                        <p className="reward-card__rewards-left">
                            <span className="value">{rewardsLeft}</span>
                            <span className="tag">left</span>
                        </p>
                        <div className="button button--small" onClick={() => {
                            updateActiveCard(activeCard.map((item,index) => {
                                return (index === optionNumber - 1) ? !(rewardsLeft <= 0) ? true : false : false;
                            }));
                            setModalDisplay({...isModalDisplay, selection: true});
                            selectionModalElement.current.scrollIntoView({ behavior: 'smooth', block: "start" });
                        }}>
                            Select Reward
                        </div>
                    </section>
            ) : (
                    <section className="reward-card reward-card--disabled">
                        <h1 className="reward-card__title">{title}</h1>
                        <h2 className="reward-card__subtitle">{subtitle}</h2>
                        <p className="reward-card__text">{text}</p>
                        <p className="reward-card__rewards-left">
                            <span className="value">{rewardsLeft}</span>
                            <span className="tag">left</span>
                        </p>
                        <div className="button button--small button--disabled">Out of stock</div>
                    </section>
            )
            }
        </React.Fragment>
    )

}

export default RewardCard;