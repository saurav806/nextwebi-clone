import React from 'react'
import './Learn.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Learn() {
  return (
    <div>
        <div className="container">
            <h1>Learn what <span>Nextwebi can do for you.</span></h1>
        </div>
        <div className="cards">
            <div className="card">
                <img src="https://www.nextwebi.com/assets/img/homepage-icons/icons/web-application-development.png" alt="Alternate Text" width="50px"/>
                <h3 class="sub-head">Web application development</h3>
                <p className='desc'>Secure, Intuitive, Scalable web apps to help you exponentially grow your business</p>
                <a href="#home" className="learn-more">Learn More &gt;</a>
            </div>
            <div className="card">
                <img src="https://www.nextwebi.com/assets/img/homepage-icons/icons/digital-transformation.png" alt="Alternate Text" width="50px"/>
                <h3 class="sub-head">Digital Transformation</h3>
                <p className='desc'>Leverage digital transformation to spark innovation & growth with a unique amalgamation of domain knowledge and industry expertise.</p>
                <a href="#home" className="learn-more">Learn More &gt;</a>
            </div>
            <div className="card">
                <img src="https://www.nextwebi.com/assets/img/homepage-icons/icons/ecommerce-development.png" alt="Alternate Text" width="50px"/>
                <h3 class="sub-head">eCommerce development</h3>
                <p className='desc'>Drive more sales and add value to your business with our feature-rich scalable ecommerce development solution</p>
                <a href="#home" className="learn-more">Learn More &gt;</a>
            </div>
            <div className="card">
                <img src="https://www.nextwebi.com/assets/img/homepage-icons/icons/web-application-development.png" alt="Alternate Text" width="50px"/>
                <h3 class="sub-head">Technology consulting</h3>
                <p className='desc'>Consulting Services with a deep, holistic, and in-depth understanding and expertise of technology and business</p>
                <a href="#home" className="learn-more">Learn More &gt;</a>
            </div>
            <div className="card">
                <img src="https://www.nextwebi.com/assets/img/homepage-icons/icons/digital-transformation.png" alt="Alternate Text" width="50px"/>
                <h3 class="sub-head">Website development</h3>
                <p className='desc'>Custom-built websites with cutting-edge technologies to help you stand out in the market and enhance conversions</p>
                <a href="#home" className="learn-more">Learn More &gt;</a>
            </div>
            <div className="card">
                <img src="https://www.nextwebi.com/assets/img/homepage-icons/icons/ecommerce-development.png" alt="Alternate Text" width="50px"/>
                <h3 class="sub-head">Maintenance & support</h3>
                <p className='desc'>Get support & maintenance service to reinvent your business landscape and transform with constant innovation and improvements</p>
                <a href="#home" className="learn-more">Learn More &gt;</a>
            </div>
        </div>
        <div className="view">
            <a href="#home" className="learn-more">View all Services &gt;</a>
        </div>
    </div>

        /* <Card className="container">
        <Card.Img variant="top" src="https://www.nextwebi.com/assets/img/homepage-icons/icons/web-application-development.png" style={{ width: '50px' }}/>
        <Card.Body className="cards">
            <Card.Title><h1>Learn what <span>Nextwebi can do for you.</span></h1></Card.Title>
            <Card.Text>
            Secure, Intuitive, Scalable web apps to help you exponentially grow your business
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card> */
  )
}

export default Learn
