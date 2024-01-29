import React from "react";
import "./Home.css";
import Learn from './HomeComponent/Learn/Learn';
import Techpartner from "./HomeComponent/Techpartner/Techpartner";
import Prosolution from "./HomeComponent/Prosolution/Prosolution";
import Technology from "./HomeComponent/Technology_partner/Technology";
import LeftTabs from "./HomeComponent/Tab/LeftTabs";
import Whynext from "./HomeComponent/Whynext/Whynext";
import Getintouch from "./HomeComponent/Getintouch/Getintouch";
import Intropage from "./HomeComponent/Intropage/Intropage";

function Home() {
  return (
    <>
      < Intropage/>
      < Learn/>
      < Techpartner/>
      < Prosolution/>
      < Technology/>
      < LeftTabs/>
      < Whynext/>
      < Getintouch/>
    </>
  );
}

export default Home;
