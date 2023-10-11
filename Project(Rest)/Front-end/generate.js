import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button, Navbar, Container, Nav, NavDropdown, Row, Col, Image, ListGroup, Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//you need to change the url if you are using gcloud
const url = 'https://8080-cs-1039741770869-default.cs-europe-west1-xedi.cloudshell.dev/courses'

//you need to change the token if you are using gcloud
const token = 'ya29.a0AWY7CkmoWFK0ArekbI7ArAhr8xtGjSYMYXhu9oDND7Ly7DNFGqOfYmCGmW8LwwF_6gAwd4BpH9yCF_5kC90uyrcnTTqm-gU0FuwVF-gtnoxplVapovoSpk61MbvGrPzRSy7ae3qQDuRy9xYefEOHl4SHqv-m53MHuaMHAmS1plLS2opqMBoW6FTmKcXJKlVCIilIs0mXLf4A-4PNNZqYzhnlPksKpCl2Lssh0SkaCgYKAXASAQ4SFQG1tDrplOfSsWw0fhlowZ6yxY7zqA0238'


function generate(){
    const navigate = useNavigate();
    const handleClick = () => navigate('/modify');
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch(url, {
            method:'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then((res) => res.json())
            .then((obji) => {return setData(obji);})
            .catch((err) => console.error(err))
    })

    return(
        <div>
            <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">SDCS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/generate">Generate Schedule</Nav.Link>
                        <Nav.Link href="https://github.com/">Link</Nav.Link>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#notUsed" disabled >Not used</NavDropdown.Item>
                        <NavDropdown.Item href="https://blackboard.kfupm.edu.sa/">BlackBoard</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#ref">Coe453 Project</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </header>
            <body >
                <Container className="p-4 my-5">
                    <ListGroup>
                        <Row  >
                            <Col >{data.map(item => <ListGroup.Item className="text-center" variant="primary" key={item.name}>{item.name}</ListGroup.Item> )}</Col>
                            <Col >{data.map(item => <ListGroup.Item className="text-center" variant="primary" key={item.code}>{item.code}</ListGroup.Item> )}</Col>
                            <Col >{data.map(item => <ListGroup.Item className="text-center" variant="primary" key={item.credits}>{item.credits}</ListGroup.Item> )}</Col>
                            <Col >{data.map(item => <ListGroup.Item className="text-center" variant="primary" key={item.day}>{item.day}</ListGroup.Item> )}</Col>
                            <Col >{data.map(item => <ListGroup.Item className="text-center" variant="primary" key={item.time}>{item.time}</ListGroup.Item> )}</Col>
                        </Row>
                    </ListGroup>
                </Container>
            </body>

            <body className = "d-flex justify-content-center">
                <Button className="my-5" href="/modify" variant="outline-primary">
                    Add Course 
                </Button>
            </body>
            <footer class= "footer fixed-bottom mt-100 py-5 my-5 bg-dark">
                <Container className= "px-4">
                    <p class = "text-center text-white">Copyright &copy; SDCS 2023</p>
                </Container>
            </footer>
        </div>
    )

}
export default generate;