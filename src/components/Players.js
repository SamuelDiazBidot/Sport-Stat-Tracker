import React from 'react'
import Searchbar from './Searchbar'
import { Container, Card } from 'react-bootstrap'

function Players() {
    return (
        <div>
            <Container>
                <Searchbar title="Players" placeholder="Search Players"/>
                <Card className="m-2">
                    <Card.Header>Jerry Bassat</Card.Header>
                </Card>
            </Container>
        </div>
    )
}

export default Players
