import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import banner from '../images/image 1.png';
import handshake from '../images/handshake.png';

function Banner() {
    return (
        <Container fluid className='py-5'>
            <Row className='align-items-center py-5 text-center'>
                <Col>
                    <h2 className='text-primary px-5 pb-4'>Find an activity that suits your best interest!!</h2>
                    <Button variant="primary">Explore</Button>
                </Col>
                <Col>
                    <p className='m-0 px-5 fs-4'>Take the test! Make new connections! Do cool things!</p>
                </Col>
                <Col className=''><img src={banner} alt="banner" className='img-fluid' /></Col>
            </Row>
            <Row className='align-items-center py-5 text-center'>
                <Col className=''><img src={handshake} alt="handshake" className='img-fluid' /></Col>
                <Col>
                    <p className='m-0 px-5 fs-4'>This test will direct you to opportuinities to make new connections!</p>
                </Col>
                <Col>
                    <h2 className='text-primary px-5 pb-4'>Create a space for new users to join your community!</h2>
                    <Button variant="primary">Explore</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner