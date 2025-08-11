import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";
import Home from "./components/pages/Home/Home";
import Post from "./components/pages/Post/Post";
import PostAdd from "./components/pages/PostAdd/PostAdd";
import PostEdit from "./components/pages/PostEdit/PostEdit";
import NotFound from "./components/pages/NotFound/NotFound";
import About from "./components/pages/About/About";
import Categories from "./components/pages/Categories/Categories";
import Category from "./components/pages/Category/Category";

function App() {
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:postId" element={<PostEdit />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryId" element={<Category />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
