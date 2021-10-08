import './welcome.styles.scss'

const Welcome = () => {
  return (
    <div className='welcome-box'>
      {/* <div className='welcome'>
        Welcome to <span className='name'>Elder Guerra</span> portifolio
      </div> */}
      <div className='name-container'>
        <span className='name'>Elder Guerra</span>
      </div>
      <div className='welcome-container'>
        <span className='welcome'>Welcome to</span>
        <span className='portifolio'>Portifolio</span>
      </div>
      <div className='content'>
        <div className='img-container'>image</div>
        <div className='description-container'>
          <span className='title'>About me</span>
          <span className='description'>discription</span>
        </div>
      </div>
    </div>
  )
}

export default Welcome