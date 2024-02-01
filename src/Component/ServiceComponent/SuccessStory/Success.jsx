import React from "react";
import "./Success.css";

import case1 from './image/case_study_-722672_thumb.png';
import case2 from './image/case_study_2.png';
import case3 from './image/case_study_3.png';
import case4 from './image/case_study_4.png';

function Success() {
  return (
    <div>
      <div className="success">
        <div className="head">
          <h3>
            Success <span>Stories</span>
          </h3>
          <p>
            Explore and understand our solutions and their deployment process
            across industries and business verticals to accelerate the growth of
            the business and ensure smooth operations.
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="image">
              <img src={case1} alt="img" width="170px"/>
            </div>
            <div className="text">
              <div className="tag">
                <h6>Gaming</h6>
              </div>
              <div className="desc">
                <a href="#">
                  Stimulating a digital game merchandiser through SEO best
                  practices with the best analytical utilizat
                </a>
              </div>
              <a href="#">View Case Study</a>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={case2} alt="img" width="170px"/>
            </div>
            <div className="text">
              <div className="tag">
                <h6>Education/ Edtech</h6>
              </div>
              <div className="desc">
                <a href="#">
                Giving life to a software that helps to assess test performance through a progressive web app
                </a>
              </div>
              <a href="#">View Case Study</a>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={case3} alt="img" width="170px"/>
            </div>
            <div className="text">
              <div className="tag">
                <h6>Advertising, Branding</h6>
              </div>
              <div className="desc">
                <a href="#">
                Giving accessibility to a hoarding advertising company to have global presence by creating a charism
                </a>
              </div>
              <a href="#">View Case Study</a>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={case4} alt="img" width="170px"/>
            </div>
            <div className="text">
              <div className="tag">
                <h6>Gaming</h6>
              </div>
              <div className="desc">
                <a href="#">
                Giving global access to a digital game merchandiser with a technically strong custom e-commerce app
                </a>
              </div>
              <a href="#">View Case Study</a>
            </div>
          </div>
        </div>
        <a href="view"> View All &gt;</a>
      </div>
    </div>
  );
}

export default Success;
