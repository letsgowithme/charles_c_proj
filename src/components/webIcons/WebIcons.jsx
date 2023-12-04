import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import './webIcons.css';

const WebIcons = () => {
  return (
    <div className="web-social-icons">
    <div>
        <a href="www.facebook.com">
        <FaFacebook className="ws_icons" />
        </a>
      
    </div>
    <div>
    <a href="www.instagram.com">
        
      <FaInstagram className="ws_icons" />
      </a>
    </div>
  </div>
  )
}

export default WebIcons