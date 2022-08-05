import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.png';
import './Header.css';


function Header() {
    return (
        <>
            <Navbar className='shadow bg-body position-fixed w-100' expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className="logo"><img src={logo} alt="header-logo" /></Navbar.Brand>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Form className="d-flex position-relative">
                            <Form.Control
                                type="search"
                                placeholder="Search"

                                aria-label="Search"
                            />
                            <i className="bi bi-search position-absolute top-50 translate-middle-y" ></i>
                        </Form>
                        <Nav.Link href="#action1" className='text-dark'>Login</Nav.Link>
                        <Nav.Link href="#action2" className='text-dark'>Sign up</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


        </>
    )
}

export default Header