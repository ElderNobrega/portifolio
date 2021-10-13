import React, { useState} from "react";

import Welcome from '../../components/welcome/welcome.component'
import ProjectOverview from "../../components/project-overview/project-overview.component";

import './homepage.styles.scss'

const HomePage = () => {

  const [isProjectLoaded, setIsProjectLoaded] = useState(false)

  const onClickHandler = () => {
    setIsProjectLoaded(true)
  }

  return (
    <div className='homepage'>
      <Welcome onBtnClicked={onClickHandler}/>
      {isProjectLoaded ? <ProjectOverview/> : null}
    </div>
  )
}

export default HomePage