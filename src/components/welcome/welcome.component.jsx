import './welcome.styles.scss'

const Welcome = () => {
  return (
    <div className='welcome-box'>
      <div className='intro-block'>
        <div className='name-container'>
          <span className='name'>Elder Guerra</span>
        </div>
        <div className='welcome-container'>
          <span className='welcome'>Welcome to</span>
          <span className='portifolio'>Portifolio</span>
        </div>
      </div>
      <div className='content'>
        <div className='img-container'>image</div>
        <div className='description-container'>
          <div className='title-container'>
            <span className='title'>About me</span>
          </div>
          <span className='description'>
            &emsp; Hello there, that is a pleasure having you here. 
            My name is Elder Guerra, from a Pilot correr, to a Jr Software Developer.
            <br/>
            I will be detailing some of my previous works and technologies used in each projects.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Welcome