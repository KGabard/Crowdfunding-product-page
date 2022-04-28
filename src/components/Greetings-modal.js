import checkIcon from '../assets/images/icon-check.svg'

function GreetingsModal({ 
    isModalDisplay, 
    setModalDisplay, 
    greetingsModalElement
}) {

    return(
        <div className={`greetings-modal ${isModalDisplay.greetings && 'displayed'}`}>
            <div className="greetings-modal__overlay" onClick={() => {
                    setModalDisplay({...isModalDisplay, greetings: false});
            }}></div>
            <section className="greetings-modal__window" ref={ greetingsModalElement }>
                <img src={checkIcon} alt="Check icon" className="greetings-modal__check-icon"></img>
                <h1 className="greetings-modal__title">Thanks for your support!</h1>
                <p className="greetings-modal__text">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                <div className="button button--smaller" onClick={() => {
                    setModalDisplay({...isModalDisplay, greetings: false});
                }}>Got it!</div>
            </section>
        </div>
    )
}

export default GreetingsModal;