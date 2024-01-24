import React from 'react'
import './Techpartner.css';

function Techpartner() {
  return (
    <div>
        <div className="container">
            <h1>Your one-stop <span>technology partner</span></h1>
        </div>
        <div className="techcards">
            <div className="techcard">
                <img src="https://www.nextwebi.com/assets/img/home-new/icon-1.svg" alt="Alternate Text" width="170px"/>
                <h3 class="tech-sub-head">Custom web application development</h3>
                <p className='techdesc'>Customer-centric agile custom web application development service to provide you with the best tech experience.</p>
                <a href="#home" className="learn-more">Learn More &gt;</a>
            </div>
            <div className="techcard">
                <img src="https://www.nextwebi.com/assets/img/new/software-development.webp" alt="Alternate Text" width="170px"/>
                <h3 class="tech-sub-head">Software development resource outsourcing</h3>
                <p className='techdesc'>Recruit talented professional developers to help you design flawless software solutions without going through the hiring hustle.</p>
                <a href="#home" className="learn-more">Learn More &gt;</a>
            </div>
            <div className="techcard">
                <img src="https://www.nextwebi.com/assets/img/new/e-commerce.webp" alt="Alternate Text" width="170px" />
                <h3 class="tech-sub-head">eCommerce application development</h3>
                <p className='techdesc'>Highly interactive customized ecommerce application platform with interactive UI/UX Design</p>
                <a href="#home" className="learn-more">Learn More &gt;</a>
            </div>
        </div>
        <div className="view">
            <a href="#home" className="learn-more">Explore More &gt;</a>
        </div>
    </div>
  )
}

export default Techpartner
