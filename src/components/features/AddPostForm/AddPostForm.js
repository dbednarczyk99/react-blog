import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FormPost from '../FormPost/FormPost';
import { addPost } from '../../../redux/postsRedux';

const AddPostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = post => {
        dispatch(addPost(post));
        navigate('/');
    };
    return (
        <FormPost action={handleSubmit} actionText='Add post' />
    )
}

export default AddPostForm;