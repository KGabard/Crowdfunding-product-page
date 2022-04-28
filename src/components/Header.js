import Nav from './Nav';

function Header({ 
  isModalDisplay, 
  setModalDisplay
}) {
    return (
      <header className="header">
          <div className="header__top-line">
            <h1 className={`header__logo ${isModalDisplay.nav && 'above'}` } onClick={() => {
                    setModalDisplay({...isModalDisplay, nav: false});
            }}>crowdfund</h1>
            <Nav 
              isModalDisplay={isModalDisplay} 
              setModalDisplay={setModalDisplay} 
            />
          </div>
      </header>
    );
  }
  
export default Header;
  