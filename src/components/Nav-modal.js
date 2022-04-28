function NavModal({ 
    isModalDisplay, 
    setModalDisplay
}) {

    return(
        <div className={`nav-modal ${isModalDisplay.nav && 'displayed'}`}>
            <div className="nav-modal__overlay" onClick={() => {
                    setModalDisplay({...isModalDisplay, nav: false});
            }}></div>
            <section className="nav-modal__window">
                <ul className="nav-modal__list">
                    <li className="nav-modal__link nav-modal__link--first">About</li>
                    <li className="nav-modal__link">Discover</li>
                    <li className="nav-modal__link">Get started</li>
                </ul>
            </section>
        </div>
    )
}

export default NavModal;