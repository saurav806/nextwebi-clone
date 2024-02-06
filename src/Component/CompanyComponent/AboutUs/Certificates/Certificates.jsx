import React from 'react'
import './Certificates.css';
import google from './google-partner.png';
import facebook from './facebook-logo.png';
import gdpr from './gdpr.png';
import clutch from './cluch.jpg';
import dmca from './dmca.png';
import goodfirm from './goodfirms-logo.jpg';


function Certificates() {
  return (
    <div className='certificates'>
     <div className="container">
        <div className="head">
        <h3>Certifications & <span>recognitions</span></h3>    
        </div>
        <ul className="logos">
            <li className="logo">
                <img src={google} alt="logo" />
            </li>
            <li className="logo">
                <img src={facebook} alt="logo" />
            </li>
            <li className="logo">
                <img src={gdpr} alt="logo" />
            </li>
            <li className="logo">
                <img src={clutch} alt="logo" />
            </li>
            <li className="logo">
                <img src={dmca} alt="logo" />
            </li>
            <li className="logo">
                <img src={goodfirm} alt="logo" />
            </li>
        </ul>
    </div> 
    </div>
  )
}

export default Certificates
