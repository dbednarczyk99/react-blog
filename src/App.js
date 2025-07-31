import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Post from "./components/pages/Post/Post";
import PostAdd from "./components/features/PostAdd/PostAdd";
import PostEdit from "./components/features/PostEdit/PostEdit";
import NotFound from "./components/pages/NotFound/NotFound";
import About from "./components/pages/About/About";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:postId" element={<PostEdit />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
