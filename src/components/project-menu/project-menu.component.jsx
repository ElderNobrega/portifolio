import './project-menu.styles.scss'

const ProjectMenu = ({projectName, gitUrl, liveUrl, description, image}) => {

  console.log(image)

  return (
    <div className='project-menu'>
      <div className='project'>
        <div className='image' style={{backgroundImage: `url(${image})`}}></div>
        <div className='links'>
          <a href={gitUrl} className='git' target='_blank' rel="noreferrer">github</a>
          <a href={liveUrl} className='live' target='_blank' rel="noreferrer">live</a>
        </div>
      </div>
      <div className='content'>
        <div className='title'>{projectName}</div>
        <div className='descr'>{description}</div>
        <div className='tecks'>tecks</div>
      </div>
    </div>
  )
}

export default ProjectMenu