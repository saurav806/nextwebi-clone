import React from 'react'
import Intropage from './SolutionComponent/Intropage/Intropage';
import SolutionList from './SolutionComponent/SolutionList/SolutionList';
import Getintouch from './HomeComponent/Getintouch/Getintouch'
import Technosoltion from './SolutionComponent/Technosolution/Technosoltion';

const Solutions = () => {
  return (
    <div>
      < Intropage/>
      < SolutionList/>
      < Technosoltion/>
      < Getintouch/>
    </div>
  )
}

export default Solutions
