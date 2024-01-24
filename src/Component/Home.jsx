import React from "react";
import "./Home.css";
import Learn from './HomeComponent/Learn'
import Technology from "./HomeComponent/Technology";
import Techpartner from "./HomeComponent/Techpartner";
import Prosolution from "./HomeComponent/Prosolution";

function Home() {
  return (
    <>
      <div className="bg bg-body-tertiary">
        <div className="info">
          <h2>IT Solutions for </h2>
          <h1>Digital Transformation</h1>

          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Volupt id
            recusandae. Ipsam cum explicabo magni quaerat.
          </h4>
          <h4>
            Lorem ipipisicing elit. Voluptatibus aspernatur voluptatum unde
            dolor id recusandae. Ipsam cum explicabo magni quaerat.
          </h4>
          <button className="btn1">Connect With Us</button>
          <a href="#home">View Our Work</a>
        </div>
      </div>
      < Learn/>
      < Techpartner/>
      < Prosolution/>
      < Technology/>
    </>
  );
}

export default Home;
