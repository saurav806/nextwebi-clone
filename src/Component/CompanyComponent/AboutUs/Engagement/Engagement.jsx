import React from 'react'
import './Engagement.css';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';

function Engagement() {
  return (
    <div>
        <div className="container">
            <h1>Engagement <span>models</span></h1>
            <p>At Nextwebi we inculcate a hybrid and agile approach to leverage our domain expertise in IT Solutions and help our client’s business boost their revenue exponentially. Every business has distinctive requirements, hence we focus on understanding the core business, functional and technological model of every business to provide the best customized solutions.</p>
        </div>
        <div className="engagementcards">
            <div className="engagementcard">
                <img src={img1} alt="Alternate Text" width="170px"/>
                <h3 >Time & material</h3> <hr />
                <p className='desc'>Through this agile development process, we enable our clients to have more control over the project development process and the cost involved. This model is an impetus for your business if:</p>
                <ul>
                    <li>
                    Your business has constantly evolved or unclear requirements
                    </li>
                    <li>
                    Extensive project with constant iterations planned
                    </li>
                    <li>
                    Your requirements will deviate or enhance on a constant basis
                    </li>
                    <li>
                    You appreciate transparency in customer-vendor relationships
                    </li>
                </ul>
            </div>
            <div className="engagementcard">
                <img src={img2} alt="Alternate Text" width="170px"/>
                <h3 >Dedicated team</h3> <hr />
                <p className='desc'>We provide you with complete project management control by enabling you to work directly with our expert teams. This model is recommended for your business if:</p>
                <ul>
                    <li>
                    Your business has constantly evolved or unclear requirements
                    </li>
                    <li>
                    Extensive project with constant iterations planned
                    </li>
                    <li>
                    Your requirements will deviate or enhance on a constant basis
                    </li>
                    <li>
                    You appreciate transparency in customer-vendor relationships
                    </li>
                </ul>
            </div>
            <div className="engagementcard">
                <img src={img3} alt="Alternate Text" width="170px" />
                <h3 >Fixed price</h3> <hr />
                <p className='desc'>If your project has strictly transparent and precisely defined requirements and scope, the fixed price approach is highly recommended. Any change required in the scope of work will alter the price and delivery time.</p>
                <ul>
                    <li>
                    Your business has constantly evolved or unclear requirements
                    </li>
                    <li>
                    Extensive project with constant iterations planned
                    </li>
                    <li>
                    Your requirements will deviate or enhance on a constant basis
                    </li>
                    <li>
                    You appreciate transparency in customer-vendor relationships
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Engagement
