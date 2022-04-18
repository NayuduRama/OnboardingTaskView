import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; 

function Navigation() {
    return ( 
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">MVC Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/customers"> <i className="bi bi-people-fill">Customers</i></Nav.Link>
                    <Nav.Link href="/product">Product</Nav.Link>
                    <Nav.Link href="/sales">Sales</Nav.Link>
                    <Nav.Link href="/store">Store</Nav.Link> 
                </Nav>
              
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}

export default Navigation;