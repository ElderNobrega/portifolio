import './header.styles.scss'

const Header = () => {
  return (
    <div className='header'>
      {/* Just using a mark up for for the header.. It will be replaced with links later one! 
          Still think on how I will organize and structure my portifolio.
      */}
      <div className='logo-container'>
        <div className='logo'>Logo</div>
        <div className='logo'>Resume</div>
      </div>
      <div className='options'>
        <div className='option'>About me</div>
        <div className='option'>Contact</div>
        <div className='option'>Projects</div>
      </div>
    </div>
  )
}

export default Header