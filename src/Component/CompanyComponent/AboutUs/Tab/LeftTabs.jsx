import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "../Tab/LeftTabs.css";

import Second from "./tab-right/Second";
import Third from "./tab-right/Third";
import Fourth from "./tab-right/Fourth";
import Fifth from "./tab-right/Fifth";
import Six from "./tab-right/Six";
import StartPa from "./tab-right/StartPa";

const LeftTabs = () => {
  return (
    <div id="head_div">
      <div className="container">
        <h1>Our <span>services</span></h1>
        <p id="p_text">
          Unlock the technical possibilities to assist your business growth with
          Nextwebi's insight-driven and result-oriented IT Services
        </p>
      </div>
      <div className="TabDesign">
        <Tab.Container defaultActiveKey="1st" id="left-tabs-example">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="1st">eCommerce development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2nd">Web development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3rd">Digital marketing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="4th">UI/UX design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="5th">Graphic design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="6th">SEO Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="7th">Corporate video</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="8th">Business Email Application</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="1st">{<StartPa />}</Tab.Pane>
                <Tab.Pane eventKey="2nd">{<Second />}</Tab.Pane>
                <Tab.Pane eventKey="3rd">{<Third />}</Tab.Pane>
                <Tab.Pane eventKey="4th">{<Fourth />}</Tab.Pane>
                <Tab.Pane eventKey="5th">{<Fifth />}</Tab.Pane>
                <Tab.Pane eventKey="6th">{<Six />}</Tab.Pane>
                <Tab.Pane eventKey="7th">{<Six />}</Tab.Pane>
                <Tab.Pane eventKey="8th">{<Six />}</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default LeftTabs;
