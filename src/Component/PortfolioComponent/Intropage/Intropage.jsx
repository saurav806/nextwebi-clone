import React from "react";
import "./Intropage.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function Intropage() {
  return (
    <div className="port">
    <div className="portintro">
      <div className="container">
        <div className="head">
          <h3>
            Our <span>Work</span>
          </h3>
        </div>
        <div className="desc">
          <p>
          With over 7+ years of our journey we have been proudly serving our clients in different industry verticals from small startups to large enterprises.
          </p>
          <p>Below are the references of some of our works, which makes you understand our capabilities and delivery process. Contact our team for advanced technology and crafted strategies to create conversion friendly business solutions for your business needs & to create an impactful digital presence.</p>
          <p>
          We analyze and deliver each project with technical finesse, innovative, creative, and precise execution tailored to the specific needs of your business.
          </p>
        </div>
        {/* <div className="connect">
          <a href="#">Connect With Us &gt;</a>
        </div> */}
      </div>
    </div>
    <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Portfolio</Breadcrumb.Item>
            </Breadcrumb>
    </div>
  );
}

export default Intropage;
