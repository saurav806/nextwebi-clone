import React from "react";
import NavigationBar from "./Component/NavigationBar";
import "./App.css";
import Footer from "./Component/Footer";
import Home from "./Component/Home";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Solutions from "./Component/Solutions";
import Services from "./Component/Services";
import Career from "./Component/Career";
import Company from "./Component/Company";
import Contactus from "./Component/Contactus";
import Portfolio from "./Component/Portfolio";
import Technologies from "./Component/Technologies";



function App() {
  return (
    // <>
    //   <NavigationBar />
    //   < Home/>
    //   < Footer/>
    // </>
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/technologies" element={<Technologies />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
