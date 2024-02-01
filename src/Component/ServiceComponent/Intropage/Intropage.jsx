import React from 'react'
import './Intropage.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


function Intropage() {
  return (
    <div className='intro'>
        <div className="container">
            <div className="head">
                <h3>IT Solutions and <span>Digital Transformation Services</span></h3>
            </div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Services</Breadcrumb.Item>
            </Breadcrumb>
            <div className="desc">
                <p>
                Transform your digital landscape with agile and powerful IT Solutions customized to your business requirements. Accelerate your business growth with future-oriented IT Solutions developed with a blend of technical knowledge and business expertise.
                </p>
            </div>
            <div className="connect">
                <a href="#">Connect With Us &gt;</a>
            </div>
        </div>
        <div className="data">
            <div className="exp">
                <h2>8+</h2>
                <h5>Years of extensive experience</h5>
            </div>
            <div className="exp">
                <h2>1600+</h2>
                <h5>Projects delivered across the globe</h5>
            </div>
            <div className="exp">
                <h2>1500+</h2>
                <h5>Client relationships</h5>
            </div>
        </div>
    </div>
  )
}

export default Intropage