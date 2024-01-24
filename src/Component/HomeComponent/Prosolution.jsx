import React from 'react'
import './Prosolution.css';

function Prosolution() {
  return (
    <div className='probg'>
      <div className="container">
            <h1>Products/Solutions <span>by Nextwebi</span></h1>
      </div>
      <div className="stacks">
        <div className="stack " >
            <div className="img-sec">
                <img src="https://www.nextwebi.com/assets/img/home/icons/shopping-cart.png" alt="ecom" width="60px"/>
            </div>
            <div className="text-sec">
                <p>eCommerce</p>
            </div>
        </div>
        <div className="stack " >
            <div className="img-sec">
                <img src="https://www.nextwebi.com/assets/img/home/icons/graduation-cap.png" alt="ecom" width="60px"/>
            </div>
            <div className="text-sec">
                <p>EdTech</p>
            </div>
        </div>
        <div className="stack " >
            <div className="img-sec">
                <img src="https://www.nextwebi.com/assets/img/home/icons/world.png" alt="ecom" width="60px"/>
            </div>
            <div className="text-sec">
                <p>Tours & travels</p>
            </div>
        </div>
        <div className="stack " >
            <div className="img-sec">
                <img src="https://www.nextwebi.com/assets/img/home/icons/order-food.png" alt="ecom" width="60px"/>
            </div>
            <div className="text-sec">
                <p>Online food ordering</p>
            </div>
        </div>
        <div className="stack " >
            <div className="img-sec">
                <img src="https://www.nextwebi.com/assets/img/home/icons/job-portal.png" alt="ecom" width="60px"/>
            </div>
            <div className="text-sec">
                <p>Job portal</p>
            </div>
        </div>
        <div className="stack " >
            <div className="img-sec">
                <img src="https://www.nextwebi.com/assets/img/home/icons/hr-manager.png" alt="ecom" width="60px"/>
            </div>
            <div className="text-sec">
                <p>HR management</p>
            </div>
        </div>
        <div className="stack " >
            <div className="img-sec">
                <img src="https://www.nextwebi.com/assets/img/home/icons/cms.png" alt="ecom" width="60px"/>
            </div>
            <div className="text-sec">
                <p>CMS and workflow</p>
            </div>
        </div>
        <div className="stack " >
            <div className="img-sec">
                <img src="https://www.nextwebi.com/assets/img/home/icons/airplane-mode.png" alt="ecom" width="60px"/>
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
