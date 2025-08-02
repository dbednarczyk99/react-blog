import { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../../redux/postsRedux';

const FormPost = () => {
    const [title, setTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({ title, shortDescription, content, author }));
        setTitle('');
        setShortDescription('');
        setContent('');
        setAuthor('');
        navigate('/');
    };


	return (

        <Row className="justify-content-center">
            <Col xs={12} lg={9}>
                <Form className='w-100 mx-auto' onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label> Title: </Form.Label>
                        <Form.Control type='text' value={title} onChange={e => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label> Short description: </Form.Label>
                        <Form.Control type='text' value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label> Content: </Form.Label>
                        <Form.Control as='textarea' rows={10} value={content} onChange={e => setContent(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label> Author: </Form.Label>
                        <Form.Control type='text' value={author} onChange={e => setAuthor(e.target.value)} />
                    </Form.Group>
                    <Button type='submit'>Add post</Button>
                </Form>
            </Col>
        </Row>
	);
};

export default FormPost;