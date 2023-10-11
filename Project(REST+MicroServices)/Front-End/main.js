import React from "react";
import { useNavigate } from "react-router-dom";
import {Button, Navbar, Container, Nav, NavDropdown, Row, Col, Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function main(){
    const navigate = useNavigate();
    const goGenerate = () => navigate('/generate');
    const goModify = () => navigate('/modify');


    return(
        <div>
            <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">SDCS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/generate">Go To Generate Schedule</Nav.Link>
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
            <main>
                <Container>
                    <Row className="px-4 my-5">
                        <Col sm={7}>
                            <Image src= "https://picsum.photos/900/400" 
                            fluid 
                            rounded 
                            className=""/>
                        </Col>
                        <Col sm={5}>
                            <h1 className= "font-weigh-light">TITLE for the project</h1>
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend tortor non nisl luctus posuere eu ut ante.
                            Curabitur eu ligula augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                            Suspendisse elementum nulla orci, eget laoreet nibh scelerisque eu.
                            Pellentesque tempus bibendum euismod. Donec lobortis dui sit amet enim blandit, placerat ullamcorper turpis fermentum. 
                            </p>
                            <Button href="/generate" variant="outline-primary">Generate Schedule</Button>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Container>    
            </main>
            <footer class= "footer fixed-bottom mt-100 py-5 my-5 bg-dark">
                <Container className= "px-4">
                    <p class = "text-center text-white">Copyright &copy; SDCS 2023</p>
                </Container>
            </footer>
        </div>
    )

}
export default main;