import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import banner from '../images/image 1.png';
import handshake from '../images/handshake.png';

function Banner() {
    return (
        <Container fluid className='py-5'>
            <Row className='align-items-center py-5 text-center'>
                <Col>
                    <h2 className='text-primary px-5 pb-4'>Find the best activity related to your profile</h2>
                    <Button variant="primary">Explore</Button>
                </Col>
                <Col>
                    <p className='m-0 px-5 fs-4'>Take the test and we will direct you to a slightly accurate group where you can create new connections in a safe and open environment</p>
                </Col>
                <Col className=''><img src={banner} alt="banner" className='img-fluid' /></Col>
            </Row>
            <Row className='align-items-center py-5 text-center'>
                <Col className=''><img src={handshake} alt="handshake" className='img-fluid' /></Col>
                <Col>
                    <p className='m-0 px-5 fs-4'>Through the tests, companies will have more users that fit with the profile of the service provided</p>
                </Col>
                <Col>
                    <h2 className='text-primary px-5 pb-4'>Publish your class, event or course to attract more users</h2>
                    <Button variant="primary">Explore</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner