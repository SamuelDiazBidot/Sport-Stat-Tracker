import React, {useState, useContext} from 'react'
import { Container, Row, Col, Nav, Card, Button, Modal, Form } from 'react-bootstrap'
import { LineChart, Line, BarChart,Bar, PieChart, Pie, Cell, Legend , CartesianGrid, XAxis, YAxis, Tooltip, } from 'recharts';
import {AuthContext} from './AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function ManagerContent() {
    return (
        <Col className="m-2">
                <Card className="my-3">
                    <Card.Img variant="top" src="" fluid/>
                    <Card.Header>Jerry Bassat</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p>Email:</p>
                            <p>Phone number:</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="my-3">
                    <Card.Img variant="top" src="" fluid/>
                    <Card.Header>Jerry Bassat</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p>Email:</p>
                            <p>Phone number:</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Col>
    )
}

function PlayersContent() {
    return (
        <Col className="m-2">
                <Card className="my-3">
                    <Card.Img variant="top" src="" fluid/>
                    <Card.Header>Jose Martinez</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p>Age:</p>
                            <p>Position:</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="my-3">
                    <Card.Img variant="top" src="" fluid/>
                    <Card.Header>Mario Diaz</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p>Age:</p>
                            <p>Position:</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Col>
    )
}

function StatsContent(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const AddStatisticBtn = () => {
        if (props.state.name) {
            return (
                <Row className="m-2 d-flex justify-content-end">
                    <Button onClick={handleShow}>
                        Add Statistics <FontAwesomeIcon icon={faPlus}/>
                    </Button>
                </Row>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    const StatisticForm = () => {
        return (
            <Modal show={show} onHide={handleClose} animation="false">
                <Modal.Header closeButton>
                    <Modal.Title>New statistic entry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form> 
                        <Form.Group controlId="year">
                            <Form.Label>Year:</Form.Label> 
                            <Form.Control as="select">
                                <option>2015</option>
                                <option>2016</option>
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="wins">
                                <Form.Label>Wins:</Form.Label>
                                <Form.Control placeholder="0"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="losses">
                                <Form.Label>Losses:</Form.Label>
                                <Form.Control placeholder="0"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="draws">
                                <Form.Label>Draws:</Form.Label>
                                <Form.Control placeholder="0"/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="goals_for">
                            <Form.Label>Goals for:</Form.Label>
                            <Form.Control placeholder="0"/>
                        </Form.Group>
                        <Form.Group controlId="goals_allowed">
                            <Form.Label>Goals Allowed:</Form.Label>
                            <Form.Control placeholder="0"/>
                        </Form.Group>
                        <Form.Group controlId="goal_difference">
                            <Form.Label>Goal Difference:</Form.Label>
                            <Form.Control placeholder="0"/>
                        </Form.Group>
                        <Form.Group controlId="points">
                            <Form.Label>Points:</Form.Label>
                            <Form.Control placeholder="0"/>
                        </Form.Group>
                        <Button type="submit" variant="primary" onClick={handleClose}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }

    let data01 = [
        { name: 'Wins', value: 3}, 
        { name: 'Loses', value: 2 }, 
        { name: 'Draws', value: 1 }, 
    ];

    const avgGoalData = [{name: 'Difference', average: 2}, {name:'Goal Allowed', average: 3}, {name:'Goals for', average: 2}, {name:'Goal', average:2}];
    const yearWinData = [
        {year: 2016, wins: 3, losses: 2, draws: 1}, 
        {year: 2017, wins: 2, losses: 2, draws: 0}, 
        {year: 2018, wins: 2, losses: 1, draws: 2}, 
        {year: 2019, wins: 4, losses: 2, draws: 1},
        {year: 2020, wins: 2, losses: 3, draws: 0},
    ];

    const COLORS = ['#00C49F', '#ff7300', '#0088FE'];

    return (
        <Container>
        <StatisticForm/>
        <AddStatisticBtn/>
        <Row className="m-2">
            <Col>
                <h3>Yearly Perferomace:</h3>
                <LineChart className="mx-auto"
                    width={500}
                    height={300}
                    data={yearWinData}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="wins" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2}/>
                    <Line type="monotone" dataKey="draws" stroke="#82ca9d" strokeWidth={2}/>
                    <Line type="monotone" dataKey="losses" strokeWidth={2}/>
                </LineChart>
            </Col>
            <Col>
                <h3>Overall Perferomace</h3>
                <PieChart width={300} height={300} className="mx-auto">
                    <Pie dataKey="value" data={data01} cx={150} cy={150} outerRadius={100} fill="#82ca9d" label >

                    {
                        data01.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))
                    }
                    </Pie>

                    <Tooltip />
                    <Legend/>
                </PieChart>
            </Col>
        </Row>
        <Row className="m-2">
            <Col>
                <h3>Goal Averages:</h3>
                <BarChart
                    width={500}
                    height={300}
                    data={avgGoalData}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="average" fill="#82ca9d" />
                </BarChart>
            </Col>
            <Col>
                <h3>Team Perferomace</h3>
            </Col>
        </Row>
        </Container>
    )
}

function TeamProfile() {
    const tabs = {
        MANAGER: 'manager',
        PLAYERS: 'players',
        STATISTICS: 'statistics'
    };

    let [tab, setActiveTab] = useState(tabs.STATISTICS);
    const [state, setState] = useContext(AuthContext);

    let content;
    switch (tab) {
        case tabs.STATISTICS:
            content = <StatsContent state={state}/>
            break;
        case tabs.MANAGER:
            content = <ManagerContent/>
            break;
        case tabs.PLAYERS:
            content = <PlayersContent/>
            break;
        default:
            break;
    }

    return (
        <Container>
            <div>
            <Row>
                <Col>
                    <h1>Los Coquis</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Team Info goes here </h4>
                </Col>
            </Row>
            </div>
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={() => setActiveTab(tabs.STATISTICS)}>Statistics</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={() => setActiveTab(tabs.MANAGER)}>Managers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" onClick={() => setActiveTab(tabs.PLAYERS)}>Players</Nav.Link>
                </Nav.Item>
            </Nav>
            {content}
        </Container>
    )
}

export default TeamProfile
