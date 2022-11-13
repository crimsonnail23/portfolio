import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation({handlePageChange}){

    

    return(
        
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#about"  onClick={()=>handlePageChange('about')}>About</Nav.Link>
                    <Nav.Link href="#portfolio" onClick={()=>handlePageChange('portfolio')}>Portfolio</Nav.Link>
                    <Nav.Link href="#resume" onClick={()=>handlePageChange('resume')}>Resume</Nav.Link>
                    <Nav.Link href="#contact" onClick={()=>handlePageChange('contact')}>Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        
    )
}

export default Navigation
