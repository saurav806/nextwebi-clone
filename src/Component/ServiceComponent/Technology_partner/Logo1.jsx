import React from 'react';
import angular from "./image/angular.webp";
import bootstraps from "./image/bootstarp.webp";
import css3 from "./image/css3.webp";
import html from "./image/html-5.webp";
import jquery from "./image/jquery.webp";
import rjs from "./image/rjs.webp";
import "../Technology_partner/logo.css";

const Logo1 = () => {
  return (

    <div className='head_div'>
        <div className='head_inner'>
            <div ><img src={ angular } alt="logo" className='image_opti' width={80} />
            <p>Angular</p></div>
            <div><img src={ bootstraps } alt="logo" className='image_opti' width={80} />
            <p>Bootstraps</p></div>
            <div><img src={ css3 } alt="logo" className='image_opti' width={80} />
            <p>Css3</p></div>
            <div><img src={ html } alt="logo" className='image_opti' width={80} />
            <p>Html5</p></div>
            <div><img src={ jquery } alt="logo" className='image_opti' width={80} />
            <p>Jquery</p></div>
            <div><img src={ rjs } alt="logo" className='image_opti' width={80} />
            <p>React</p></div>
        </div>
    </div>
    
    
    
    
    
    
  )
}

export default Logo1;
