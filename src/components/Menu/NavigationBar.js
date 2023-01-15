import logo from './../../images/logo.jpeg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';





function NavigationContainer() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"> <img src={logo} className="App-logo" alt="logo" width="200"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">About Us</Nav.Link>
                        <Nav.Link href="#home">Contact</Nav.Link>

                    </Nav>
                    <Nav>
				<BrowserRouter>
        			<Routes>
  	  					<Route path="/login">
            				
         	 			</Route>
      				</Routes>
      			</BrowserRouter>
                        <Nav.Link href="#deets">Login</Nav.Link>
                        <Button variant="outline-success">Search</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationContainer;