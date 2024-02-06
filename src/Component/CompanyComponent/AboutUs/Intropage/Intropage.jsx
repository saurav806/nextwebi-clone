import React from 'react';
import './Intropage.css';
import Breadcrumb from "react-bootstrap/Breadcrumb";

function Intropage() {
  return (
    <div className='company'>
      <div className="aboutbg bg-body-tertiary">
        <div className="info">
          <div className="head">
            <h3>About <span>Us</span></h3>
          </div>
          <p>
          Nextwebi delivers high-end IT solutions to the businesses. We offer end to end managed IT services that makes us preferred technology partners for our customers.
          </p>
          <p>
          Our expert team members have worked with various successful startups and large-scale enterprises to develop the best IT solutions for various industries.
          </p>
        </div>
      </div>
      <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>About Us</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default Intropage
