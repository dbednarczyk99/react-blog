import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

const FormPost = ({action, actionText, ...props}) => {
    const [title, setTitle] = useState( props.title || '' );
    const [shortDescription, setShortDescription] = useState( props.shortDescription || '');
    const [content, setContent] = useState( props.content || '' );
    const [author, setAuthor] = useState( props.author || '' );
    const [publishedDate, setPublishedDate] = useState( props.publishedDate ? new Date(props.publishedDate) : new Date() );
    const [category, setCategory] = useState( props.categoryName || '' );

    // validation
    const [contentErr, setContentErr] = useState(false);
    const [publishedDateErr, setPublishedDateErr] = useState(false);
    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    //console.log(category);
    const handleSubmit = e => {
        setContentErr(!content);
        setPublishedDateErr(!publishedDate);
        if(content && publishedDate) {
            const id = props.id || shortid();
            action({ id, title, shortDescription, content, publishedDate, author, category});
            setTitle('');
            setShortDescription('');
            setContent('');
            setAuthor('');
        }
    };

    const categories = useSelector(state => state.categories);

    let returnPath = '';
    if(actionText === 'Add post') returnPath = '/';
    else if(actionText === 'Edit post') returnPath = `/post/${props.id}`;

	return (

        <Row className="justify-content-center">
            <Col xs={12} lg={9}>
                <Form className='w-100 mx-auto' onSubmit={validate(handleSubmit)}>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label> Title: </Form.Label>
                        <Form.Control 
                            {...register('title', {required: true, minLength: 3})}
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            type='text' placeholder='Enter title'
                        />
                        {errors.title && <span className='d-block form-text text-danger mt-2'>This field is required. Title must be at least 3 characters long.</span>}
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label> Category: </Form.Label>
                        <Form.Select 
                            {...register('category', {required: true})}
                            value={category}
                            onChange={e => {setCategory(e.target.value); console.log(e)}}
                        >
                            <option value=''>Select category</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.name}>{category.name}</option>
                            ))}
                        </Form.Select>
                        {errors.category && <span className='d-block form-text text-danger mt-2'>This field is required.</span>}
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label> Short description: </Form.Label>
                        <Form.Control 
                            {...register('shortDescription', {required: true, minLength: 20})}
                            value={shortDescription}
                            onChange={e => setShortDescription(e.target.value)}
                            type='text' placeholder='Enter description'
                        />
                        {errors.shortDescription && <span className='d-block form-text text-danger mt-2'>This field is required. Short description must be at least 20 characters long.</span>}
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label> Published date: </Form.Label>
                        <DatePicker selected={publishedDate} onChange={ date => setPublishedDate(date) }/>
                        {publishedDateErr && <span className='d-block form-text text-danger mt-2'>This field is required.</span>}
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label> Content: </Form.Label>
                        <ReactQuill theme='snow' value={content} onChange={setContent} />
                        {contentErr && <span className='d-block form-text text-danger mt-2'>This field is required.</span>}
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label> Author: </Form.Label>
                        <Form.Control 
                            {...register('author', {required: true, minLength: 3})}
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                            type='text' placeholder='Enter author'
                        />
                        {errors.author && <span className='d-block form-text text-danger mt-2'>This field is required. Author's name must be at least 3 characters long.</span>}
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