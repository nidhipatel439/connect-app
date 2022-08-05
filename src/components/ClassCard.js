import React from 'react'
import { Card } from 'react-bootstrap'

const ClassCard = ({ image, text, date }) => {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Text className='text-center'>
                    <p className='m-0'>{text}</p>
                    <p className='m-0'>{date}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ClassCard