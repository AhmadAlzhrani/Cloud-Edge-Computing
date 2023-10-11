import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button, Navbar, Container, Nav, NavDropdown, Row, Col, Image, ListGroup, Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const url = 'https://8080-cs-1039741770869-default.cs-europe-west1-onse.cloudshell.dev/courses'

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
    }
  }
`;

function GraphQLAPI(){
    const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>
}

function generate(){
    const navigate = useNavigate();
    const handleClick = () => navigate('/modify');
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch(url, {
            method:'GET',
            headers: {
                'Authorization': `Bearer ya29.a0AWY7CknXWD3lWvtrVOipE31XRruvvARdob4ZSANpfrziHDZ1H1NUQJILaXu56gSjp712nNXTbTRl0Kw-WHNnfoDeo8ipCI0ASdSnmQrciCZDhT8ExqTCuXI7zPWx0G1rZKwp3CWyC7RxBPF9lhgqJwJHcUZv5IjdEZYb5DMYSSZ-FtQHeonNcD6GfC48kqKgrSLxzbTg7S74E-ovhq5Aq998hdC0we3Onob2WesaCgYKAb8SAQ4SFQG1tDrpDIS4LyeQiRIm_FdJc9VfPg0238`,
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