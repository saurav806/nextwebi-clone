import React from "react";
import './Happyclient.css';
import img1 from './about.webp'

function Happyclient() {
  return (
    <>
      <div className="happycontainer">
        <div className="img-section">
          <img src={img1} alt="img" />
          <div className="msg">
            <h3>800+</h3>
            <p>Happy clients</p>
          </div>
        </div>
        <div className="desc">
          <p>
            At Nextwebi, our constant focus is on critical information and
            maintaining a high level of professionalism. Through our agile
            digital methodology and practice of constant innovation with domain
            expertise, we aim to deliver unparalleled customer satisfaction
            through our services. We believe in dedicated involvement to provide
            post-implementation support. Our expert IT solutions are aimed at
            improving and developing operational efficacies for over 1500
            clients across the globe.
          </p>
          <p>
            Established in 2015 and headquartered in Bengaluru, Nextwebi has
            made a significant mark in the industry through its
            cost-effectiveness and focused working strategy. We are also a
            Google partner company and with a motto of “Imagination, Meets
            Implementation”, we aim to provide cost-effective, innovative, and
            sustainable web solutions for our clients.
          </p>
        </div>
      </div>
    </>
  );
}

export default Happyclient;
