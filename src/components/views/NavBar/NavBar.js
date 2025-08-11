import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>MyBlog</Navbar.Brand>
                <Nav className="ms-auto">
                    <Button className="bg-primary mx-1 border-light"><Nav.Link as={NavLink} to="/">Home</Nav.Link></Button>
                    <Button className="bg-primary mx-1 border-light"><Nav.Link as={NavLink} to="/categories">Categories</Nav.Link></Button>
                    <Button className="bg-primary mx-1 border-light"><Nav.Link as={NavLink} to="/about">About</Nav.Link></Button>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;