function ProjectTracker({ projectData }) {
    
    let goalCompletion = Math.round((projectData.donations / projectData.goal) * 1000) / 10;
    (goalCompletion < 0) && (goalCompletion = 0);
    (goalCompletion > 100) && (goalCompletion = 100);

    function numberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
      <section className='project-tracker'>
        <div className='project-tracker__datas'>
            <div className='data-display data-display--first'>
                <p className='data-display__data'>{'$' + numberWithCommas(projectData.donations)}</p>
                <p className='data-display__subtitle'>of {'$' + numberWithCommas(projectData.goal)} backed</p>
            </div>
            <div className='data-display'>
                <p className='data-display__data'>{numberWithCommas(projectData.backersNumber)}</p>
                <p className='data-display__subtitle'>total backers</p>
            </div>
            <div className='data-display'>
                <p className='data-display__data'>{numberWithCommas(projectData.daysLeft)}</p>
                <p className='data-display__subtitle'>days left</p>
            </div>
        </div>
        <div className='project-tracker__progression-bar'>
            <div className='project-tracker__progression-bar__completion' style={{
                width: goalCompletion.toString() + '%'
            }}></div>
        </div>
      </section>
    );
  }
  
export default ProjectTracker;
  