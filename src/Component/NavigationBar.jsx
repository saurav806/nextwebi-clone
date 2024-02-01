import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.css";

import {
  Link
} from "react-router-dom";


const NavigationBar = () => {
  return (
    <>
      <div className="App">
        <Navbar expand="lg" className="bg-body-tertiary ">
          <Container className="navlink-container">
            <Navbar.Brand as={Link} to={"./"}>NextWebi</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto navlink">
                <Nav.Link as={Link} to={"./services"} className='custom-navlink'>Services</Nav.Link>
                <Nav.Link as={Link} to={"./solutions"} className='custom-navlink'>Solutions</Nav.Link>
                <Nav.Link as={Link} to={"./portfolio"} className='custom-navlink'>Portfolio</Nav.Link>
                <Nav.Link as={Link} to={"./technologies"} className='custom-navlink'>Technologies</Nav.Link>
                <Nav.Link as={Link} to={"./company"} className='custom-navlink'>Company</Nav.Link>
                <Nav.Link as={Link} to={"./career"} className='custom-navlink'>Career</Nav.Link>
                <Nav.Link as={Link} to={"./contact"} className='custom-navlink'>Contact Us</Nav.Link>
                <button className="btn btn-primary custom-btn">
                  Quick Enquiry
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* <div>
        <Routes>
          <Route path='/solutions' element={ <Solutions/> } />
          <Route path='/services' element={ <Services/> } />
          <Route path='/portfolio' element={ <Portfolio/> } />
          <Route path='/technologies' element={ <Technologies/> } />
          <Route path='/company' element={ <Company/> } />
          <Route path='/career' element={ <Career/> } />
          <Route path='/contact' element={ <Contactus/> } />
        </Routes>
        </div> */}
    </>
  )
}

export default NavigationBar
