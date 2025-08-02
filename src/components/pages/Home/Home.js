import { Row, Col, Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const posts = useSelector((state) => state.posts);
  //console.log(typeof posts[0].id);

  return (
    <Container> 
      <Row>
        {posts.map( post => (
          <Col xs={12} className="p-0" md={6} lg={4} key={post.id}>
            <Card className="mb-4 shadow-sm m-md-2">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle>Author: {post.author}</Card.Subtitle>
                <Card.Text>Published: {post.publishedDate}</Card.Text>
                <Card.Text>{post.shortDescription}</Card.Text>             
                <Link to={`/post/${post.id}`}>
                  <Button variant="primary">Show more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
          <Container className="text-center">
            <Link to={`/post/add`}>
                <Button variant="primary">Add new post</Button>
              </Link>
          </Container>
    </Container>
  );
};

export default Home;