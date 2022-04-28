import hamburgerIcon from '../assets/images/icon-hamburger.svg'
import closeIcon from '../assets/images/icon-close-menu.svg'

function Nav({ 
  isModalDisplay, 
  setModalDisplay
}) {
    return (
      <nav className="nav">
        <img 
          src={ isModalDisplay.nav ? closeIcon : hamburgerIcon } 
          alt="Navigation menu" 
          className={`nav__icon ${isModalDisplay.nav && 'close'}`} 
          onClick={() => {
            isModalDisplay.nav ? (
              setModalDisplay({...isModalDisplay, nav: false})
            ) : (
              setModalDisplay({...isModalDisplay, nav: true})
            );
          }}></img>
        <ul className="nav__list">
            <li className="nav__link">About</li>
            <li className="nav__link">Discover</li>
            <li className="nav__link">Get started</li>
        </ul>

      </nav>
    );
  }
  
export default Nav;
  