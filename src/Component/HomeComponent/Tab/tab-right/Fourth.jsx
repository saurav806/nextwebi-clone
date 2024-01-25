import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './first.css';
function Fourth(){
  return (
    <div className='first'>
     
     <Card id='card_first'>
      <Card.Header as="h4" id='title'>UI/UX designing
</Card.Header>
      <Card.Body>
       
        <Card.Text className='text-con'>
        Responsive, fluid, intuitive user experience and user experience and user interface designs for websites and applications of any industry. We carefully balance the latest technology, business objective, and visual aesthetics to provide you with an interactive, fast-loading, and user-friendly experience.        </Card.Text>
        <ul id="ul_under">
        <li>Simple, scalable, and robust features with supporting model binding</li>
        <li>Lightweight code architecture</li>
        <li>Well-integrated with IIS</li>
        <li>Open-ended formatting with solid resource-orientation</li>
      </ul> 
        <Button variant="primary">Contact Us</Button>
      </Card.Body>
    </Card>
  </div>
  )
}

export default Fourth;





