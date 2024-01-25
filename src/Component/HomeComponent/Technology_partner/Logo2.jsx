import React from 'react';
import csharp from "./image/csharp.webp";
import dot_net from "./image/dot-net.webp";
import dotnet_core from "./image/dotnet-core.webp";
import dotnet_mvc from "./image/dotnet-mvc.webp";
import php from "./image/php.webp";
import java from "./image/java.webp";
import python from "./image/python.webp";
import "../Technology_partner/logo.css";

const Logo2 = () => {
  return (

    <div className='head_div'>
        <div className='head_inner'>
            <div ><img src={ csharp } alt="logo" className='image_opti' width={80} />
            <p>C#</p></div>
            <div><img src={ dot_net } alt="logo" className='image_opti' width={80} />
            <p>Dot-net</p></div>
            <div><img src={ dotnet_core } alt="logo" className='image_opti' width={80} />
            <p>Dotnet-core</p></div>
            <div><img src={ dotnet_mvc } alt="logo" className='image_opti' width={80} />
            <p>Dotnet-mvc</p></div>
            <div><img src={ php } alt="logo" className='image_opti' width={80} />
            <p>Php</p></div>
            <div><img src={ python } alt="logo" className='image_opti' width={80} />
            <p>Python</p></div>
            <div><img src={ java } alt="logo" className='image_opti' width={80} />
            <p>Java</p></div>
        </div>
    </div>
    
    
    
    
    
    
  )
}

export default Logo2;
