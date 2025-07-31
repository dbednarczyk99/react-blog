import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById, removePost } from '../../../redux/postsRedux';
import { Container, Row, Button } from 'react-bootstrap';
import PopUp from '../../common/PopUp/PopUp';

const Post = () => {
    const { postId } = useParams();
    console.log('postId: ', postId);
    console.log('typeof postId: ', typeof postId);

    const post = useSelector(state => getPostById(state, postId));
    console.log("post.id: ",post.id);
    console.log('typeof post.id:', typeof post.id);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [popupShow, popupShowChange] = useState(false)

    const handleRemove = () => {
        console.log('Remove clicked')
        popupShowChange(true);
        console.log(popupShow);
    }

    return (
        <>
            <PopUp 
                show={popupShow}
                handleClose={() => popupShowChange(false)}
                handleConfirm = {() => {
                    console.log('confirmed');
                    dispatch(removePost(post.id));
                    navigate('/');
                }}/>
            <Container className='mb-5'>
                <Row className=''>
                    <h2 className='col-8'>{post.title}</h2>
                    <div className="col-4 d-flex justify-content-center gap-2 mt-3">
                        <Button variant="outline-info">Edit</Button>
                        <Button variant="outline-danger" onClick={handleRemove}>
                            Remove
                        </Button>
                    </div>
                </Row>
                <p><strong>Author:</strong> {post.author}</p>
                <p><strong>Published:</strong> {post.publishedDate}</p>
                <p>{post.content}</p>
            </Container>
        </>
    );

}

export default Post;