import React from 'react'
import './Technology.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';  
import Logo1 from './Logo1';
import Logo2 from './Logo2';
import Logo3 from './Logo3';
import Logo4 from './Logo4';
import Logo5 from './Logo5';
import Logo6 from './Logo6';

function Technology() {
  return (
    <div>
      <div className="container">
        <h2>Technologies we <span>work with</span></h2>
      </div>
      <Tabs 
      defaultActiveKey="Front-End"
      transition={true}
      id="noanim-tab-example"
      className="mb-3 seru"
    >
      <Tab eventKey="Front-End" title="Front-End">
        <Logo1 />
      </Tab>
      <Tab eventKey="BackEnd" title="BackEnd">
       <Logo2/>
      </Tab>
      <Tab eventKey="Tools" title="Tools">
        <Logo3 />
      </Tab>
      <Tab eventKey="Platforms" title="Platforms">
        <Logo4/>
      </Tab>
      <Tab eventKey="DevOps / Clouds" title="DevOps / Clouds">
        <Logo5 />
      </Tab>
      <Tab eventKey="Database" title="Database" >
        <Logo6 />
      </Tab>
    </Tabs>
    </div>
  )
}

export default Technology;