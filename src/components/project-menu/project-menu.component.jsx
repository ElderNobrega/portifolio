import './project-menu.styles.scss'

const ProjectMenu = () => {
  return (
    <div className='project-menu'>
      <div className='project'>
        <div className='image'>image</div>
        <div className='links'>
          <a className='git'>github</a>
          <a className='live'>live</a>
        </div>
      </div>
      <div className='content'>
        <div className='title'>title</div>
        <div className='descr'>description</div>
        <div className='tecks'>tecks</div>
      </div>
    </div>
  )
}

export default ProjectMenu