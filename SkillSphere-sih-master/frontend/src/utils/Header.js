import React, { useState } from 'react'
import logo from '../assets/logo.png'
import back from '../assets/menu-back.png'
import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentPath = window.location.pathname;
  const menuBar = () => {
    setIsVisible(!isVisible);
  }
  return (
    <>
      <div className={`side-menu-bar ${isVisible ? 'visible' : ''}`}>
        <div className='top-section'>
          <div className='top-upper-section'>
            <div className="back-icon" onClick={menuBar}>
              <img src={back} className='menu-back-btn-img' />
            </div>
            <div className='side-menu-logo'>

              <div className="logo">
                <img src={logo} alt="Logo" className='logo-image-side-menu' />
              </div>
              <div className="logo-text-side-menu">
                <Link to="/" className='custom-link'><div className='skillsphere-txt'>Vocations</div></Link>
              </div>

            </div>
          </div>

          <div className='top-lower-section'>

            <Link to="/home" className='custom-link'><div className='side-menu-bar-element'>Home</div></Link>

            <Link to="/about" className='custom-link'>
              <div className='side-menu-bar-element'>About us</div>
            </Link>
            <Link to="/chatAi" className='custom-link'>
              <div className='side-menu-bar-element'>Chat AI</div>
            </Link>
            <Link to="/settings" className='custom-link'>
              <div className='side-menu-bar-element'>Settings</div>
            </Link>
          </div>
        </div>

        <div className='bottom-section'>
          <Link to="/help" className='custom-link'>
            <div className='side-menu-bar-element'>Help</div>
          </Link>
          <div className='side-menu-bar-element side-menu-bar-element-LogOut'>Log out</div>
        </div>
      </div>

      <nav className="navbar">
        <div className="left-section">
          {
            currentPath == "/" ?
              '' :
              <div className="menu-icon" onClick={menuBar}>
                &#9776;
              </div>
          }

          <div className="logo">
            <Link to={"/home"}>
              <img src={logo} alt="Logo" className='logo-image' />
            </Link>
          </div>
          <div className="logo-text">
            <span>Virtual Vocations</span>
          </div>

        </div>

        <div className="profile">
          <i className="fas fa-user"></i>
        </div>
      </nav>
    </>
  )
}

export default Header
