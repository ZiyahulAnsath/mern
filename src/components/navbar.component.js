import React from "react";
import {Link} from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default class Navbarcomponent extends React.Component{
    render(){
        return(
            <>
            <Navbar bg="dark"  variant="dark" expand="lg">
            <Container fluid>
                <Link to={"/"} className="navbar-brand">Navbar scroll</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link to={"/"} className="nav-link">Create User</Link>
                    <Link to={"/userdetails"} className="nav-link">Show User</Link>
                    {/* <Link to={"/update"} className="nav-link">Update</Link> */}
                    {/* <Link></Link> */}
                
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </>
        );
    }
}