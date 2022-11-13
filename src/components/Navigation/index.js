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
        
        // <nav>
        //     <ul>
        //         <li>
        //             <a href="#about" onClick={()=>handlePageChange('about')}>
        //                 About
        //             </a>
        //         </li>
        //         <li>
        //             <a href="#portfolio" onClick={()=>handlePageChange('portfolio')}>
        //                 Portfolio
        //             </a>
        //         </li>
        //         <li>
        //             <a href="#contact" onClick={()=>handlePageChange('contact')}>
        //                 Contact
        //             </a>
        //         </li>
        //         <li>
        //             <a href="#resume" onClick={()=>handlePageChange('resume')}>
        //                 Resume
        //             </a>
        //         </li>
        //     </ul>
        // </nav>
    )
}

export default Navigation
