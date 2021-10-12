import React from "react";

import Welcome from '../../components/welcome/welcome.component'
import ProjectOverview from "../../components/project-overview/project-overview.component";

import './homepage.styles.scss'

const HomePage = () => {
  return (
    <div className='homepage'>
      <Welcome/>
      {/* <ProjectOverview/> */}
    </div>
  )
}

export default HomePage