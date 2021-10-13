import { useState } from 'react'

import CustomButton from '../custom-button/custom-button.component'

import './welcome.styles.scss'

const Welcome = ({onBtnClicked}) => {

  const [isBtnClicked, setIsBtnClicked] = useState(false)

  const onClickHandler = () => {
    setIsBtnClicked(true)
    onBtnClicked()
  }

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
          <p className='description'>
            &emsp; Hello there, that is a pleasure having you here. 
            My name is Elder Guerra, from a successful Pilot correr, to a passionate Jr Software Developer.
            <br/>
            &emsp; I will be detailing some of my previous works and technologies used in each projects, 
            As well as links to git repository, a brief description and live demonstrations (if apply).
          </p>
        </div>
      </div>
      {isBtnClicked ? null : <CustomButton type='button' onClick={onClickHandler}>Get Started</CustomButton>}
    </div>
  )
}

export default Welcome