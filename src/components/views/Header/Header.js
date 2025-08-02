import { Container } from 'react-bootstrap'
import NavBar from '../NavBar/NavBar';
import { useLocation } from 'react-router-dom';

const Header = props => {

    const location = useLocation();
    const path = location.pathname;
    // console.log('Path: ', path);
    // console.log('typeof path: ', typeof path);
    let pageTitle = '';

    const pathMap = {
        '/': 'All posts',
        '/about': 'About',
        '/post/add' : 'Add post'
    };

    if (path.includes('/post/edit')) pageTitle = "Edit post";
    else pageTitle = pathMap[path];

    return (
        <Container className="p-0">
            <NavBar/>
            <h1 className="my-5">{pageTitle}</h1>
        </Container>
    );
}

export default Header;