import React from 'react'
import { Navbar, Nav }from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">
                Sport Stat Tracker {' '}
                <FontAwesomeIcon icon={faChartBar}/>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} exact to="/teams">Teams</Nav.Link>
                <Nav.Link as={Link} to="/players">Players</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Link to="/login">Login</Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar> 
    )
}

export default Header
