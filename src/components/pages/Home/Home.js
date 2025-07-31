import { Row, Col, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Home = () => {
  const posts = useSelector((state) => state.posts);
  //console.log(typeof posts[0].id);

  return (
    <Container> 
      <Row>
        {posts.map( post => (
          <Col xs={12} md={6} lg={4} key={post.id}>
            <Container className="p-3 m-2 border">
              <h2>{post.title}</h2>
              <p><b>Author: </b>{post.author}</p>
              <p><b>Published: </b>{post.publishedDate}</p>
              <p>{post.shortDescription}</p>
              <Link to={`/post/${post.id}`}>
                <Button variant="primary">Show more</Button>
              </Link>
            </Container>
          </Col>
        ))
        }
        <Col xs={12} md={6} lg={4}>
          <Container>
            <Link to={`/post/add`}>
                <Button variant="primary">Add new post</Button>
              </Link>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;