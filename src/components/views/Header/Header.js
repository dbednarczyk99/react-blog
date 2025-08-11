import { Container } from 'react-bootstrap'
import NavBar from '../NavBar/NavBar';
import { useLocation } from 'react-router-dom';
import { getCategoryById } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';

const Header = () => {

    const location = useLocation();
    const path = location.pathname;
    // console.log('Path: ', path);
    // console.log('typeof path: ', typeof path);
    let pageTitle = '';

    const pathMap = {
        '/': 'All posts',
        '/about': 'About',
        '/post/add' : 'Add post',
        '/categories' : 'All categories'
    };

    let categoryId = '';
    if (path.includes('/category/')) {
        console.log('spli: ', path.split('/category/')[1])
        categoryId = path.split('/category/')[1];
    }
    const category = useSelector(state => getCategoryById(state, categoryId));

    if (path.includes('/post/edit')) pageTitle = "Edit post";
    else if(path.includes('/category/')) pageTitle = `Category: ${category.name}`
    else pageTitle = pathMap[path];

    return (
        <Container className="p-0">
            <NavBar/>
            <h1 className="my-5">{pageTitle}</h1>
        </Container>
    );
}

export default Header;