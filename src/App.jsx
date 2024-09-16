import CreatePost from "./components/Posts/CreatePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import PublicNavbar from "./components/Navbar/PublicNavBar";
import Home from "./components/Home";
import EditPost from "./components/Posts/EditPost";
import PostDetails from "./components/Posts/PostDetails";
import Login from "./components/User/login";
import Register from "./components/User/register";
function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <PublicNavbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CreatePost />} path="/create-post" />
        <Route element={<Posts />} path="/posts" />
        <Route element={<EditPost />} path="/posts/edit/:postId" />
        <Route element={<PostDetails />} path="/posts/:postId" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
