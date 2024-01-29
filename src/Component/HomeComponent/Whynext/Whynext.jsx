import React from "react";
import { Button } from "react-bootstrap";
import "./Whynext.css";

function Whynext() {
  return (
    <div className="content">
      <div className="contentbox">
        <div className="heading">
          <h3>
            Why <span>Nextwebi</span>
          </h3>
        </div>
        <div className="desc">
            <p>
            At Nextwebi, our constant focus is on critical information and maintaining a high level of professionalism. Through our agile digital methodology and practice of constant innovation with domain expertise, we aim to deliver unparalleled customer satisfaction through our services.
            </p>
        </div>
        <ul className="lists">
            <li>One-stop destination for your IT business needs</li>
            <li>Digital consulting with pragmatic work approach</li>
            <li>Innovative next-gen result driven digital transformation</li>
            <li>Value-centric relationship beyond the contract</li>
            <li>Agile process aligned with your business goal</li>
            <li>Solutions formulated according to the target audience</li>
            <li>Team of dedicated enthusiastic individuals to propel growth</li>
            <li>Delivering exceptional customer experiences globally</li>
        </ul>
        <a href="#" className="learnnmore">Learn More &gt;</a>
      </div>
    </div>
  );
}

export default Whynext;
