import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormPost from '../FormPost/FormPost';
import { editPost, getPostById } from '../../../redux/postsRedux';

const EditPostForm = () => {

    const path = useParams();
    //console.log(path.postId);
    const id = path.postId;
    const post = useSelector(state => getPostById(state, path.postId ));
    //console.log('post: ', post);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = post => {
        dispatch(editPost({...post, id}));
        navigate(`/post/${id}`);
    };
    return (
        <FormPost action={handleSubmit} actionText='Edit post' {...post}/>
    )
}

export default EditPostForm;