import { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FormPost = ({action, actionText, ...props }) => {
    const [title, setTitle] = useState( props.title || '' );
    const [shortDescription, setShortDescription] = useState( props.shortDescription || '');
    const [content, setContent] = useState( props.content || '' );
    const [author, setAuthor] = useState( props.author || '' );
    
    const handleSubmit = e => {
        e.preventDefault();
        action({ title, shortDescription, content, author });
        setTitle('');
        setShortDescription('');
        setContent('');
        setAuthor('');
    };

    //console.log('In FormPost: ', props.id);

    let returnPath = '';
    if(actionText === 'Add post') returnPath = '/';
    else if(actionText === 'Edit post') returnPath = `/post/${props.id}`;

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
                    <Button type='submit'>{actionText}</Button>
                    <Link to={returnPath}>
                        <Button className='mx-2' variant="secondary">Return</Button>
                    </Link>
                </Form>
            </Col>
        </Row>
	);
};

export default FormPost;