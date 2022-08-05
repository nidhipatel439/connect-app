import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'

function Footer() {
    return (
        <Container fluid className=' border-top border-3 py-4'>
            <Row className='text-center'>
                <Col><h4>About us</h4><Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link className="text-secondary p-0" >Career</Nav.Link>
                    <Nav.Link className="text-secondary p-0" >Media center</Nav.Link>
                    <Nav.Link className="text-secondary p-0" >News</Nav.Link>
                </Nav></Col>
                <Col><h4>Explore</h4><Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link className="text-secondary p-0" >Events</Nav.Link>
                    <Nav.Link className="text-secondary p-0" >Companies</Nav.Link>
                </Nav></Col>
                <Col><h4>Account</h4><Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link className="text-secondary p-0" >Enrolled events</Nav.Link>
                    <Nav.Link className="text-secondary p-0" >Past events</Nav.Link>
                    <Nav.Link className="text-secondary p-0" >Set up</Nav.Link>
                </Nav></Col>
                <Col><h4>Support</h4><Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link className="text-secondary p-0" >Contact us</Nav.Link>
                    <Nav.Link className="text-secondary p-0" >Help center</Nav.Link>
                    <Nav.Link className="text-secondary p-0" >FAQs</Nav.Link>
                </Nav></Col>
            </Row>
        </Container>
    )
}

export default Footer