import React from 'react';
import aws from "./image/aws.webp";
import azure from "./image/azure.webp";
import google_cloud from "./image/google-cloud.webp";
import docker from "./image/docker.webp";
import digital_ocean from "./image/digital-ocean.webp";
import kubernetes from "./image/kubernetes.webp";
import git from "./image/git.webp";

import "../Technology_partner/logo.css";

const Logo5 = () => {
  return (

    <div className='head_div'>
        <div className='head_inner'>
            <div ><img src={ aws } alt="logo" className='image_opti' width={80} />
            <p>aws</p></div>
            <div><img src={ azure } alt="logo" className='image_opti' width={80} />
            <p>azure</p></div>
            <div><img src={ google_cloud } alt="logo" className='image_opti' width={80} />
            <p>google_cloud</p></div>
            <div><img src={ docker } alt="logo" className='image_opti' width={80} />
            <p>docker</p></div>
            <div><img src={ digital_ocean } alt="logo" className='image_opti' width={80} />
            <p>digital_ocean</p></div>
            <div><img src={ kubernetes } alt="logo" className='image_opti' width={80} />
            <p>kubernetes</p></div>
            <div><img src={ git } alt="logo" className='image_opti' width={80} />
            <p>git</p></div>
            
        </div>
    </div>
    
    
    
    
    
    
  )
}

export default Logo5;
