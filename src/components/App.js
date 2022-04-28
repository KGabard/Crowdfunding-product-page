import Header from './Header'
import Project from './Project';
import SelectionModal from './Selection-modal';
import GreetingsModal from './Greetings-modal';
import NavModal from './Nav-modal';
import { projectDataSet } from '../datas/Project-datas';
import { useState } from 'react';
import { useRef } from 'react';

function App() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [projectData, updateProjectData] = useState(projectDataSet);
  const [isModalDisplay, setModalDisplay] = useState({
    selection: false,
    greetings: false,
    nav: false
  });
  const [activeCard, updateActiveCard] = useState([false, false, false, false]);
  const selectionModalElement = useRef();
  const greetingsModalElement = useRef();

  return (
    <div className="App">
      <Header 
        isModalDisplay={isModalDisplay} 
        setModalDisplay={setModalDisplay} 
      />
      <Project 
        isBookmarked={isBookmarked} 
        setIsBookmarked={setIsBookmarked} 
        projectData={projectData} 
        isModalDisplay={isModalDisplay} 
        setModalDisplay={setModalDisplay} 
        activeCard={activeCard}
        updateActiveCard={updateActiveCard}
        selectionModalElement={selectionModalElement}
      />
      <SelectionModal 
        projectData={projectData} 
        updateProjectData={updateProjectData} 
        isModalDisplay={isModalDisplay} 
        setModalDisplay={setModalDisplay} 
        activeCard={activeCard}
        updateActiveCard={updateActiveCard}
        selectionModalElement={selectionModalElement}
        greetingsModalElement={greetingsModalElement}
      />
      <GreetingsModal 
        isModalDisplay={isModalDisplay} 
        setModalDisplay={setModalDisplay} 
        greetingsModalElement={greetingsModalElement}
      />
      <NavModal 
        isModalDisplay={isModalDisplay} 
        setModalDisplay={setModalDisplay} 
      />
    </div>
  );
}

export default App;
