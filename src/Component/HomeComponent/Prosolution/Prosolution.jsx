import React from 'react'
import './Prosolution.css';
import ecommerce from './image/shopping-cart.png';
import edtech from './image/graduation-cap.png';
import toursandtravels from './image/world.png';
import onlinefood from './image/order-food.png';
import jobportal from './image/job-portal.png';
import hrmanager from './image/hr-manager.png';
import cms from './image/cms.png';
import airline from './image/airplane-mode.png';


function Prosolution() {
  return (
    <div className='probg'>
      <div className="container">
            <h1>Products/Solutions <span>by Nextwebi</span></h1>
      </div>
      <div className="stacks">
        <div className="stack " >
            <div className="img-sec">
                <img src={ecommerce} alt="ecom" width="60px"/>
            </div>
            <div className="text-sec">
                <p>eCommerce</p>
            </div>
        </div>
        <div className="stack " >
            <div className="img-sec">
                <img src={edtech} alt="ecom" width="60px"/>
            </div>
            <div className="text-sec">
                <p>EdTech</p>
            </div>
        </div>
        <div className="stack " >
            <div className="img-sec">
                <img src={toursandtravels} alt="ecom" width="60px"/>
            </div>
            <div className="text-sec">
                <p>Tours & travels</p>
            </div>
        </div>
        <div className="stack " >
            <div className="img-sec">
                <img src={onlinefood} alt="ecom" width="60px"/>
            </div>
            <div className="text-sec">
                <p>Online food ordering</p>
            </div>
        </div>
        <div className="stack " >
            <div className="img-sec">
                <img src={jobportal} alt="ecom" width="60px"/>
            </div>
            <div className="text-sec">
                <p>Job portal</p>
            </div>
        </div>
        <div className="stack " >
            <div className="img-sec">
                <img src={hrmanager} alt="ecom" width="60px"/>
            </div>
            <div className="text-sec">
                <p>HR management</p>
            </div>
        </div>
        <div className="stack " >
            <div className="img-sec">
                <img src={cms} alt="ecom" width="60px"/>
            </div>
            <div className="text-sec">
                <p>CMS and workflow</p>
            </div>
        </div>
        <div className="stack " >
            <div className="img-sec">
                <img src={airline} alt="ecom" width="60px"/>
            </div>
            <div className="text-sec">
                <p>Airline booking</p>
            </div>
        </div>
        <div className="explore">
            <a href="#home" className="learn-more">Explore More &gt;</a>
        </div>
      </div>
    </div>
  )
}

export default Prosolution
