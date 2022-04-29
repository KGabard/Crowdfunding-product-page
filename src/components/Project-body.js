import RewardCard from "./Reward-card";

function ProjectBody({ 
    projectData, 
    activeCard, 
    updateActiveCard, 
    isModalDisplay, 
    setModalDisplay, 
    selectionModalElement 
}) {

    return (
        <section className="project-body">
            <h1 className="project-body__header">About this project</h1>
            <p className="project-body__summary">
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>
            <p className="project-body__summary">
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
            <RewardCard 
                title={"Bamboo Stand"}
                subtitle={"Pledge $25 or more"}
                text={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."}
                rewardsLeft={projectData.rewardsLeft[0]}
                activeCard={activeCard}
                updateActiveCard={updateActiveCard}
                optionNumber={2}
                isModalDisplay={isModalDisplay} 
                setModalDisplay={setModalDisplay}
                selectionModalElement={selectionModalElement}
            />
            <RewardCard 
                title={"Black Edition Stand"}
                subtitle={"Pledge $75 or more"}
                text={"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
                rewardsLeft={projectData.rewardsLeft[1]}
                activeCard={activeCard}
                updateActiveCard={updateActiveCard}
                optionNumber={3}
                isModalDisplay={isModalDisplay} 
                setModalDisplay={setModalDisplay}
                selectionModalElement={selectionModalElement}
            />
            <RewardCard 
                title={"Mahogany Edition Stand"}
                subtitle={"Pledge $200 or more"}
                text={"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
                rewardsLeft={projectData.rewardsLeft[2]}
                activeCard={activeCard}
                updateActiveCard={updateActiveCard}
                optionNumber={4}
                isModalDisplay={isModalDisplay} 
                setModalDisplay={setModalDisplay}
                selectionModalElement={selectionModalElement}
            />
        </section>
    );
}

export default ProjectBody;