import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button, Navbar, Container, Nav, NavDropdown, Row, Col, Image, Modal, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//you need to change the url if you are using gcloud
const url = 'https://8080-cs-1039741770869-default.cs-europe-west1-xedi.cloudshell.dev/courses'

//you need to change the token if you are using gcloud
const token = 'ya29.a0AWY7CkmoWFK0ArekbI7ArAhr8xtGjSYMYXhu9oDND7Ly7DNFGqOfYmCGmW8LwwF_6gAwd4BpH9yCF_5kC90uyrcnTTqm-gU0FuwVF-gtnoxplVapovoSpk61MbvGrPzRSy7ae3qQDuRy9xYefEOHl4SHqv-m53MHuaMHAmS1plLS2opqMBoW6FTmKcXJKlVCIilIs0mXLf4A-4PNNZqYzhnlPksKpCl2Lssh0SkaCgYKAXASAQ4SFQG1tDrplOfSsWw0fhlowZ6yxY7zqA0238'

function modify(){
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        credits: 0,
        day: '',
        time: ''
      });
    
    
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      }

    const navigate = useNavigate();
    const handleClick = () => navigate('/generate');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    function handleSubmit(event) {
        setShow(false)
        event.preventDefault();

            fetch(url, {
                method:'POST',
                headers: {'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(formData)
            })
                .then((res) => res.json())
                .then((obji) => console.log(obji))
                .catch((err) => console.error(err))
    }

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
            <body className="d-flex justify-content-center" >
            <>
            <Button className="my-5" variant="outline-primary" onClick={handleShow}>
                Add Course
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Course Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Course name</Form.Label>
                    <Form.Control
                        type={String}
                        placeholder="Computer Architecture"
                        autoFocus
                        value={formData.name} onChange={handleChange}
                        name="name"
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Course Code</Form.Label>
                    <Form.Control 
                        type={String}
                        placeholder="coe202"
                        autoFocus 
                        value={formData.code} onChange={handleChange}
                        name="code"
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Course Credit Hours</Form.Label>
                    <Form.Control 
                        type={Number}
                        placeholder="3"
                        autoFocus
                        value={formData.credits} onChange={handleChange}
                        name="credits"
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Course Day</Form.Label>
                    <Form.Control 
                        type={String}
                        placeholder="UTR"
                        autoFocus
                        value={formData.day} onChange={handleChange} 
                        name="day"
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Course Time</Form.Label>
                    <Form.Control 
                        type={String}
                        placeholder="12:00"
                        autoFocus
                        value={formData.time} onChange={handleChange} 
                        name="time"
                    />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Add Course
                </Button>
                </Modal.Footer>
            </Modal>
            </>
            </body>
            <footer class= "footer fixed-bottom mt-100 py-5 my-5 bg-dark">
                <Container className= "px-4">
                    <p class = "text-center text-white">Copyright &copy; SDCS 2023</p>
                </Container>
            </footer>
        </div>
    )

}
export default modify;