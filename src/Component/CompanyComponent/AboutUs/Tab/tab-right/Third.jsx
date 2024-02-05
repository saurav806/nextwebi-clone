import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './first.css';
function Third(){
  return (
    <div className='first'>
     
     <Card id='card_first'>
      <Card.Header as="h4" id='title'>Digital marketing
</Card.Header>
      <Card.Body>
       
        <Card.Text className='text-con'>
        Drive relevant traffic to your website with Nextwebi's strategic and comprehensive digital marketing services. Our digital marketing experts will carefully assess your business requirements and devise digital marketing strategies and plans to create an impactful online brand identity.        </Card.Text>
        <ul id="ul_under">
        <li>Personalized customer experience</li>
        <li>Super fast checkout with multiple payment options</li>
        <li>Easy management of orders and returns</li>
        <li>Wishlist, coupons, and much more</li>
        <li>Push notifications and social media integrations</li>        

      </ul> 
        <Button variant="primary">Contact Us</Button>
      </Card.Body>
    </Card>
  </div>
  )
}

export default Third;





