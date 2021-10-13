import ProjectMenu from '../project-menu/project-menu.component'

import data from '../../data/data'
import './project-overview.styles.scss'

const ProjectOverview = () => {
  return (
    <div className='project-overview'>
      <ProjectMenu/>
    </div>
  )
}

export default ProjectOverview