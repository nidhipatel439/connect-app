import React from 'react'
import { Button, Container } from 'react-bootstrap'
import ClassCard from './ClassCard'
import wall_painting from '../images/classes/wall-painting.png'
import online_yoga from '../images/classes/online-yoga.png'
import guitar_class from '../images/classes/guitar-class.png'
import analogue_photography from '../images/classes/analogue-photography.png'
import beach_volleyball from '../images/classes/beach-volleyball.png'
import spanish_class from '../images/classes/spanish-class.png'
import e_game from '../images/classes/e-game.png'

function MainBody() {
    return (
        <Container fluid>
            <div className='my-3'>

                <h4 className='mb-3'>Explore available activities</h4>
                <div className='d-flex my-2'>
                    <Button variant="primary flex-fill mx-3">Sports</Button>{' '}
                    <Button variant="primary flex-fill mx-3">Arts</Button>{' '}
                    <Button variant="primary flex-fill mx-3">Culture</Button>{' '}
                    <Button variant="primary flex-fill mx-3">Language</Button>{' '}
                    <Button variant="primary flex-fill mx-3">Games</Button>{' '}
                    <Button variant="primary flex-fill mx-3">Music</Button>{' '}
                </div>
            </div>
            <div className='my-5'>

                <h4 className='mb-3'>New class starting soon</h4>
                <div className='d-flex gap-3 horizontal-scrollable'>
                    <ClassCard image={wall_painting} text="Wall painting" date="15/08" />
                    <ClassCard image={online_yoga} text="Outdoor yoga" date="15/08" />
                    <ClassCard image={guitar_class} text="Online guitar class" date="17/08" />
                    <ClassCard image={analogue_photography} text="Analogue photography" date="17/08" />
                    <ClassCard image={beach_volleyball} text="Beach volleyball" date="20/08" />
                    <ClassCard image={spanish_class} text="Spanish class" date="22/08" />
                    <ClassCard image={e_game} text="e-game championship" date="22/08" />
                </div>
            </div>
            <div className='my-5'>

                <h4 className='mb-3'>Search for events</h4>
                <div className='d-flex my-2 gap-4'>
                    <Button variant="secondary px-5">Event</Button>{' '}
                    <Button variant="secondary px-5">Location</Button>{' '}
                    <Button variant="success px-5">Search</Button>{' '}
                </div>
            </div>
        </Container>
    )
}

export default MainBody