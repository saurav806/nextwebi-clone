import React from 'react';
import figma from "./image/figma.webp";
import photoshop from "./image/photoshop.webp";
import ai from "./image/ai.webp";
import coreldraw from "./image/coreldraw.webp";
import visual_studio from "./image/visual-studio.webp";
import eclipse from "./image/eclipse.webp";
import visual_studio_code from "./image/visual-studio-code.webp";
import "../Technology_partner/logo.css";

const Logo3 = () => {
  return (

    <div className='head_div'>
        <div className='head_inner'>
            <div ><img src={ figma } alt="logo" className='image_opti' width={80} />
            <p>Figma</p></div>
            <div><img src={ photoshop } alt="logo" className='image_opti' width={80} />
            <p>Photoshop</p></div>
            <div><img src={ ai } alt="logo" className='image_opti' width={80} />
            <p>ai</p></div>
            <div><img src={ coreldraw } alt="logo" className='image_opti' width={80} />
            <p>coreldraw</p></div>
            <div><img src={ visual_studio } alt="logo" className='image_opti' width={80} />
            <p>visual_studio</p></div>
            <div><img src={ eclipse } alt="logo" className='image_opti' width={80} />
            <p>eclipse</p></div>
            <div><img src={ visual_studio_code } alt="logo" className='image_opti' width={80} />
            <p>visual_studio_code</p></div>
        </div>
    </div>
    
    
    
    
    
    
  )
}

export default Logo3;
