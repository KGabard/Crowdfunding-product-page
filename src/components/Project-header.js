import logo from '../assets/images/logo-mastercraft.svg';
import bookmarkIcon from '../assets/images/icon-bookmark-gray.svg';
import bookmarkedIcon from '../assets/images/icon-bookmark-green.svg';

function ProjectHeader({ 
    isBookmarked, 
    setIsBookmarked, 
    isModalDisplay, 
    setModalDisplay, 
    selectionModalElement
}) {

    return (
        <section className="project-header">
            <img className="project-header__logo" src={logo} alt="logo "></img>
            <h1 className="project-header__title">Mastercraft Bamboo Monitor Riser</h1>
            <p className="project-header__subtitle">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className='project-header__buttons'>
                <div className="button" onClick={() => {
                    setModalDisplay({...isModalDisplay, selection: true});
                    selectionModalElement.current.scrollIntoView({ behavior: 'smooth', block: "start" });
                }}>Back this project</div>
                {isBookmarked ? (
                    <div className="button button--bookmarked" onClick={() => {setIsBookmarked(false)}}>
                        <img src={bookmarkedIcon} alt="bookmarked icon"></img>
                        <p>Bookmarked</p>
                    </div>
                ) : (
                    <div className="button button--bookmark" onClick={() => {setIsBookmarked(true)}}>
                        <img src={bookmarkIcon} alt="bookmark icon"></img>
                        <p>Bookmark</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProjectHeader;