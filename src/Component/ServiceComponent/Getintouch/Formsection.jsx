import React from 'react'
import './Formsection.css'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';


function Formsection() {
  return (
    <div className='form-section'>
        <div className="head">
            <h3>Hey there, <span>let's begin.</span></h3>
        </div>
        <h6>Connect, Discover, Transform.</h6>
        <p>Reach out to us and explore the exciting digital ideas we have for your business</p>
      <Form>
      <Row className="mb-3 ">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Control placeholder="Name"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Control placeholder="Contact number with country code"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
            <Form.Control placeholder="Company*"/>
        </Form.Group>

      </Row>

      {/* <InputGroup>
        <Form.Control as="textarea" aria-label="With textarea" placeholder='Write Your Message' />
      </InputGroup> */}

        <Form.Group controlId="formFile" className="mb-3">
          <InputGroup className='input-text-group'>
            <Form.Control type="text" placeholder="Write Your Message" />
            <Button className="input-button" variant="outline-secondary">Browse or Drop Files Here</Button>
          </InputGroup>
        </Form.Group>

      <Button className="form-submit-button" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Formsection
