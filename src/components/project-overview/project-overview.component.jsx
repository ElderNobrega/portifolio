import ProjectMenu from '../project-menu/project-menu.component'

import data from '../../data/data'
import './project-overview.styles.scss'

const ProjectOverview = () => {

  //projectName, gitUrl, liveUrl, description.. title={projectName} gitUrl={} liveUrl={} description={}

  return (
    <div className='project-overview'>
      {/* mapping the projects data and passing it through props to the ProjectMenu component */}
      {data.projects.map(({ id, ...otherProps}) => (
        <ProjectMenu key={id} {...otherProps}/>
      ))}
    </div>
  )
}

export default ProjectOverview