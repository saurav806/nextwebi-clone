import React from 'react';
import './Technosolution.css';
import img7 from './image/7.png'
import img6 from './image/14.png'
import img5 from './image/5.png'
import img4 from './image/4.png'
import img3 from './image/3.png'
import img2 from './image/9.png'

function Technosoltion() {
  return (
    <div>
       <div className="container">
            <div className="head">
                <h3>Businesses that runs on <span>Nextwebi's technology solutions</span></h3>    
            </div>
            <ul className="slider">
                <li className="slides">
                    <img src={img7} alt="image" width="140px"/>
                </li>
                <li className="slides">
                    <img src={img6} alt="image" width="140px"/>
                </li>
                <li className="slides">
                    <img src={img5} alt="image" width="140px"/>
                </li>
                <li className="slides">
                    <img src={img4} alt="image" width="140px"/>
                </li>
                <li className="slides">
                    <img src={img3} alt="image" width="140px"/>
                </li>
                <li className="slides">
                    <img src={img2} alt="image" width="140px"/>
                </li>
                <li className="slides">
                    <img src={img2} alt="image" width="140px"/>
                </li>
                <li className="slides">
                    <img src={img4} alt="image" width="140px"/>
                </li>
                <li className="slides">
                    <img src={img6} alt="image" width="140px"/>
                </li>
                <li className="slides">
                    <img src={img3} alt="image" width="140px"/>
                </li>
                <li className="slides">
                    <img src={img5} alt="image" width="140px"/>
                </li>
                <li className="slides">
                    <img src={img7} alt="image" width="140px"/>
                </li>
            </ul>
       </div>
    </div>
  )
}

export default Technosoltion
