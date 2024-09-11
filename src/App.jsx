import CreatePost from "./components/Posts/CreatePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import PublicNavbar from "./components/Navbar/PublicNavBar";
import Home from "./components/Home/Home";
import EditPost from "./components/Posts/EditPost";
import PostDetails from "./components/Posts/PostDetails";
function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <PublicNavbar />
      <Routes>
        {/* create post */}
        <Route element={<Home />} path="/" />
        <Route element={<CreatePost />} path="/create-post" />
        <Route element={<Posts />} path="/posts" />
        <Route element={<EditPost />} path="/posts/edit/:postId" />
        <Route element={<PostDetails />} path="/posts/:postId" />
        {/* <CreatePost />
        <Posts /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
