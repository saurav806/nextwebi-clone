import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './first.css';
function Second(){
  return (
    <div className='first'>
     
     <Card id='card_first'> 
      <Card.Header as="h4" id='title'>Web application development
</Card.Header>
      <Card.Body>
       
        <Card.Text className='text-con'>
        Nextwebi leverages its technical prowess and intricate domain knowledge to deliver next-gen custom web application solutions that will help you achieve your business and strategic requirements. </Card.Text>
        <ul id="ul_under">
        <li>Accelerated mobile pages implementation</li>
        <li>AI-powered chatbots for interactional interface</li>
        <li>Unique designs with flexible integrations</li>
        <li>Highly secure and scalable applications</li>
      </ul> 
        <Button variant="primary">Contact Us</Button>
      </Card.Body>
    </Card>
  </div>
  )
}

export default Second;





