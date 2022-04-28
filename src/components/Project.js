import ProjectHeader from "./Project-header";
import ProjectTracker from "./Project-tracker";
import ProjectBody from "./Project-body";
import React from 'react';

function Project({ 
    isBookmarked, 
    setIsBookmarked, 
    projectData, 
    isModalDisplay, 
    setModalDisplay, 
    activeCard, 
    updateActiveCard, 
    selectionModalElement
}) {
    
    return (
        <React.Fragment>
            <ProjectHeader
                isBookmarked={isBookmarked}
                setIsBookmarked={setIsBookmarked}
                isModalDisplay={isModalDisplay} 
                setModalDisplay={setModalDisplay}
                selectionModalElement={selectionModalElement}
            />
            <ProjectTracker
                projectData={projectData}
            />
            <ProjectBody
                projectData={projectData}
                activeCard={activeCard}
                updateActiveCard={updateActiveCard}
                isModalDisplay={isModalDisplay} 
                setModalDisplay={setModalDisplay}
                selectionModalElement={selectionModalElement}
            />
        </React.Fragment>
    );
}

export default Project;