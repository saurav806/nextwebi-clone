import React from 'react'
import Intropage from './CompanyComponent/AboutUs/Intropage/Intropage'
import Happyclient from './CompanyComponent/AboutUs/Happyclient/Happyclient'
import LeftTabs from './CompanyComponent/AboutUs/Tab/LeftTabs'
import Certificates from './CompanyComponent/AboutUs/Certificates/Certificates'
import Engagement from './CompanyComponent/AboutUs/Engagement/Engagement'

const Company = () => {
  return (
    <div>
      < Intropage/>
      < Happyclient/>
      < Certificates/>
      < LeftTabs/>
      < Engagement/>
    </div>
  )
}

export default Company
