import React from 'react';
import sharepoint from "./image/sharepoint.webp";
import office_365 from "./image/office-365.webp";
import microsoft_dynamics from "./image/microsoft-dynamics.webp";
import wordpress from "./image/wordpress.webp";
import shopify from "./image/shopify.webp";
import woocommerce from "./image/woocommerce.webp";
import amadeus from "./image/amadeus.webp";
import salesforce from "./image/salesforce.webp";
import "../Technology_partner/logo.css";

const Logo4 = () => {
  return (

    <div className='head_div'>
        <div className='head_inner'>
            <div ><img src={ sharepoint } alt="logo" className='image_opti' width={80} />
            <p>sharepoint</p></div>
            <div><img src={ office_365 } alt="logo" className='image_opti' width={80} />
            <p>office-365</p></div>
            <div><img src={ microsoft_dynamics } alt="logo" className='image_opti' width={80} />
            <p>microsoft-dynamics</p></div>
            <div><img src={ wordpress } alt="logo" className='image_opti' width={80} />
            <p>wordpress</p></div>
            <div><img src={ shopify } alt="logo" className='image_opti' width={80} />
            <p>shopify</p></div>
            <div><img src={ woocommerce } alt="logo" className='image_opti' width={80} />
            <p>woocommerce</p></div>
            <div><img src={ amadeus } alt="logo" className='image_opti' width={80} />
            <p>amadeus</p></div>
            <div><img src={ salesforce } alt="logo" className='image_opti' width={80} />
            <p>salesforce</p></div>
        </div>
    </div>
    
    
    
    
    
    
  )
}

export default Logo4;
