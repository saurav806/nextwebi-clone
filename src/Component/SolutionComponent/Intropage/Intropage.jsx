import React from 'react'
import './Intropage.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


function Intropage() {
  return (
    <div className='intro'>
        <div className="container">
            <div className="head">
                <h3>Our <span>Products</span></h3>
            </div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Solutions</Breadcrumb.Item>
            </Breadcrumb>
            <div className="desc">
                <p>
                At Nextwebi, a leading IT Solution Provider company, we focus on providing the best of user experience with our scalable, innovative and meaningful products and solutions which aids businesses to simplify their work process.
                </p>
            </div>
            <div className="connect">
                <a href="#">Connect With Us &gt;</a>
            </div>
        </div>
    </div>
  )
}

export default Intropage