import React from 'react'
import Getintouch from './ServiceComponent/Getintouch/Getintouch';
import Technology from './ServiceComponent/Technology_partner/Technology';
import Learn from './ServiceComponent/Learn/Learn';
import Intropage from './ServiceComponent/Intropage/Intropage';
import Success from './ServiceComponent/SuccessStory/Success';
import Otherservices from './ServiceComponent/OtherServices/Otherservices';

const Services = () => {
  return (
    <>
      < Intropage/>
      < Learn/>
      < Technology/>
      < Success/>
      < Otherservices/>
      < Getintouch/> 
    </>
  )
}

export default Services

