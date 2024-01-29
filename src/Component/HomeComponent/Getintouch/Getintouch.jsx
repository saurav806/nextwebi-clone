import React from "react";
import "./Getintouch.css";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import Formsection from "./Formsection";


function Getintouch() {
  return (
    <div className="getintouch">
      <div className="containers">
        <div className="infos">
          <div className="head">
            <h3>
              Let's get <span>in touch</span>
            </h3>
          </div>
          <div className="items">
            <div className="icon">
              <LocalPhoneRoundedIcon />
            </div>
            <p>
              <span className="telhead">Call</span>
              <a href="tel:+917619635111">+91 7619635111</a>
            </p>
          </div>
          <div className="items">
            <div className="icon">
              <WhatsAppIcon />
            </div>
            <p>
              <span className="telhead">WhatsApp</span>
              <a href="tel:+917619635111">+91 7619635111</a>
            </p>
          </div>
          <div className="items">
            <div className="icon">
              <MailIcon />
            </div>
            <p>
              <span className="telhead">Email</span>
              <a href="tel:+917619635111">projects@nextwebi.com</a>
            </p>
          </div>
          <div className="items">
            <div className="icon">
              <VideoCallSharpIcon />
            </div>
            <p>
              <span className="telhead">Skype</span>
              <a href="tel:+917619635111">ajaybehold</a>
            </p>
          </div>
        </div>
        {/* <div className="form">this is form</div> */}
        < Formsection/>
      </div>
    </div>
  );
}

export default Getintouch;
