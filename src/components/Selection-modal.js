import closeIcon from '../assets/images/icon-close-modal.svg'
import React from 'react';
import SelectionCard from './Selection-card';

function SelectionModal({ 
    projectData, 
    updateProjectData, 
    isModalDisplay, 
    setModalDisplay, 
    activeCard, 
    updateActiveCard, 
    selectionModalElement, 
    greetingsModalElement
}) {    
    
    return (
        <div className={`selection-modal ${isModalDisplay.selection && 'displayed'}`}>
            <div className="selection-modal__overlay" onClick={() => {
                    setModalDisplay({...isModalDisplay, selection: false});
            }}></div>
            <section className="selection-modal__window" ref={selectionModalElement}>
                <img src={closeIcon} alt="close icon" className="selection-modal__close-icon" onClick={() => {
                    setModalDisplay({...isModalDisplay, selection: false});
                }}></img>
                <h1 className="selection-modal__title">Back this project</h1>
                <h2 className="selection-modal__subtitle">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</h2>
                <SelectionCard
                    title={'Pledge with no reward'}
                    defaultPledge={0}
                    text={"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."}
                    activeCard={activeCard}
                    updateActiveCard={updateActiveCard}
                    optionNumber={1}
                    rewardsLeft={undefined}
                    projectData={projectData}
                    updateProjectData={updateProjectData}
                    isModalDisplay={isModalDisplay}
                    setModalDisplay={setModalDisplay}
                    greetingsModalElement={greetingsModalElement}
                />
                <SelectionCard
                    title={'Bamboo Stand'}
                    defaultPledge={25}
                    text={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."}
                    activeCard={activeCard}
                    updateActiveCard={updateActiveCard}
                    optionNumber={2}
                    rewardsLeft={projectData.rewardsLeft[0]}
                    projectData={projectData}
                    updateProjectData={updateProjectData}
                    isModalDisplay={isModalDisplay}
                    setModalDisplay={setModalDisplay}
                    greetingsModalElement={greetingsModalElement}
                />
                <SelectionCard
                    title={'Black Edition Stand'}
                    defaultPledge={75}
                    text={"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
                    activeCard={activeCard}
                    updateActiveCard={updateActiveCard}
                    optionNumber={3}
                    rewardsLeft={projectData.rewardsLeft[1]}
                    projectData={projectData}
                    updateProjectData={updateProjectData}
                    isModalDisplay={isModalDisplay}
                    setModalDisplay={setModalDisplay}
                    greetingsModalElement={greetingsModalElement}
                />
                <SelectionCard
                    title={'Mahogany Special Edition'}
                    defaultPledge={200}
                    text={"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
                    activeCard={activeCard}
                    updateActiveCard={updateActiveCard}
                    optionNumber={4}
                    rewardsLeft={projectData.rewardsLeft[2]}
                    projectData={projectData}
                    updateProjectData={updateProjectData}
                    isModalDisplay={isModalDisplay}
                    setModalDisplay={setModalDisplay}
                    greetingsModalElement={greetingsModalElement}
                />
            </section>
        </div>
    )
}

export default SelectionModal;