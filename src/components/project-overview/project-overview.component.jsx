import data from '../../data/data'

import './project-overview.styles.scss'

const ProjectOverview = () => {
  return (
    <div className='project-overview'>
      <div className='project-menu'>
        <div className='project'>
          <div className='image'>image</div>
          <div className='links'>
            <a className='git'>github</a>
            <a className='live'>live</a>
          </div>
        </div>
        <div className='descr-container'>
          <div className='descr'>description</div>
          <div className='tecks'>tecks</div>
        </div>
      </div>
      <div className='project-menu'>
        <div className='project'>
          <div className='image'>image</div>
          <div className='links'>
            <a className='git'>github</a>
            <a className='live'>live</a>
          </div>
        </div>
        <div className='descr-container'>
          <div className='descr'>description</div>
          <div className='tecks'>tecks</div>
        </div>
      </div>
      <div className='project-menu'>
        <div className='project'>
          <div className='image'>image</div>
          <div className='links'>
            <a className='git'>github</a>
            <a className='live'>live</a>
          </div>
        </div>
        <div className='descr-container'>
          <div className='descr'>description</div>
          <div className='tecks'>tecks</div>
        </div>
      </div>
      <div className='project-menu'>
        <div className='project'>
          <div className='image'>image</div>
          <div className='links'>
            <a className='git'>github</a>
            <a className='live'>live</a>
          </div>
        </div>
        <div className='descr-container'>
          <div className='descr'>description</div>
          <div className='tecks'>tecks</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectOverview