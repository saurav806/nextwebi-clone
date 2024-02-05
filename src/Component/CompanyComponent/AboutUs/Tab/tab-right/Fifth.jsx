import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './first.css';
function Fifth(){
  return (
    <div className='first'>
        
     
     <Card id='card_first'>
      <Card.Header as="h4" id='title'>Graphic design
</Card.Header>
      <Card.Body>
       
        <Card.Text className='text-con'>
        Conversion-driven ecommerce platform customized and built with a robust business strategy to drive revenue growth. Our customer-centric ecommerce application is built with advanced technologies to help you drive maximum ROI for your business.        </Card.Text>
        <ul id="ul_under">
        <li>Understanding project requirement and user story</li>
        <li>Tailored according to the business requirements</li>
        <li>Collaborative research and consultation</li>
        <li>Innovative featured roadmaps</li>
      </ul> 
        <Button variant="primary">Contact Us</Button>
      </Card.Body>
    </Card>
  </div>
  )
}

export default Fifth;





