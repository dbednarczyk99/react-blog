import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav, ListGroup } from 'react-bootstrap';

const Categories = () => {
  const categories = useSelector(state => state.categories);

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
        <ListGroup>
            {categories.map(cat => (
            <ListGroup.Item>
                <Nav.Link
                    key={cat.id}
                    as={Link}
                    to={`/category/${cat.id}`}
                    className="py-1 m-0 fs-5"
                    style={{ color: '#007bff', textDecoration: 'none' }}
                >
                    {cat.name}
                </Nav.Link>
            </ListGroup.Item>
            ))}
        </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
