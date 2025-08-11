import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { getPostsByCategory, getCategoryById } from '../../../redux/postsRedux';
import dateToStr from '../../../utils/dateToStr';
import { Link } from 'react-router-dom';

const Category = () => {
  const { categoryId } = useParams();
  console.log('Category.js id: ', categoryId);
  const category = useSelector(state => getCategoryById(state, categoryId));
  console.log('cat name:', category);
  const posts = useSelector(state => getPostsByCategory(state, category.name));
  console.log(posts);

  return (
    <Container className="mt-4">
        <Row>
            {posts.map( post => (
            <Col xs={12} className="p-0" md={6} lg={4} key={post.id}>
                <Card className="mb-4 shadow-sm m-md-2">
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text className='m-0'><b>Author: </b>{post.author}</Card.Text>
                    <Card.Text className='m-0'><b>Category: </b>{post.category}</Card.Text>
                    <Card.Text className='mb-2'><b>Published: </b>{dateToStr(post.publishedDate)}</Card.Text>
                    <Card.Text>{post.shortDescription}</Card.Text>             
                    <Link to={`/post/${post.id}`}>
                    <Button variant="primary">Show more</Button>
                    </Link>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
    </Container>
  );
};

export default Category;
