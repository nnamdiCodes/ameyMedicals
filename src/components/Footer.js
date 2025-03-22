import React from 'react'
import footerLogo from '../images/zoomedLogo-white.PNG'
import logoBW from '../images/logoB&W.PNG'
import { Link } from "react-router-dom"
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa" 

const Footer = ({
  isDarkMode
}) => {
  return (
    <footer>

      <div className="listItems">
          <ul className="navUl">
            <li>
              {
                isDarkMode ? <img src={logoBW} alt="Footer img" className='footer-logo'/> : <img src={footerLogo} alt="Footer img" className='footer-logo'/>
              }
            </li>
            <li className="listItem"><Link to={"/"} >HOME</Link></li>
            <li className="listItem"><Link to={"about"} >ABOUT US</Link></li>
            <li className="listItem"><Link to={"contact"} >CONTACT US</Link></li>
          </ul>
      </div>

      <ul className="socialIcons">
          <li>
              <a href="" target="_blank" rel="noopener noreferrer"> 
                <FaFacebook className="icon"/> 
              </a>
          </li>
          <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon"/> 
              </a>
          </li>
          <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="icon"/>
              </a>
          </li>
      </ul>
    </footer>
  )
}

export default Footer