import CreatePost from "./components/Posts/CreatePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import PublicNavbar from "./components/Navbar/PublicNavBar";
import Home from "./components/Home/Home";
import EditPost from "./components/Posts/EditPost";
import PostDetails from "./components/Posts/PostDetails";
import Login from "./components/User/login";
import Register from "./components/User/register";
import Profile from "./components/User/Profile";
import PrivateNavbar from "./components/Navbar/PrivateNavBar";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { checkAuthStatus } from "./APIServices/usersApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { isAuthenticated } from "./components/redux/slices/authSlices";
import AuthRoutes from "./components/AuthRoutes/AuthRoutes";
import UserDashbaord from "./components/User/UserDashboard";
import AccountSummaryDashboard from "./components/User/AccountSummary";
import AddCategory from "./components/Category/AddCategory";

function App() {
  const { data } = useQuery({
    queryKey: ["user-auth"],
    queryFn: checkAuthStatus,
  });

  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isAuthenticated(data));
  }, [data, dispatch]);
  const { userAuth } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      {/* Navbar */}

      {userAuth ? <PrivateNavbar /> : <PublicNavbar />}
      <Routes>
        <Route
          element={
            <AuthRoutes>
              <Home />{" "}
            </AuthRoutes>
          }
          path="/"
        />
        <Route element={<UserDashbaord />} path="/dashboard">
        <Route
          element={
            <CreatePost />
          }
          path="create-post" // when we are using outlet we dont need to use / note outlet is use for creating nested routes
        />
        <Route
          element={
            <AddCategory />
          }
          path="add-category" // when we are using outlet we dont need to use / note outlet is use for creating nested routes
        />
         <Route
          element={
            <AccountSummaryDashboard />
          }
          path="" // when we are using outlet we dont need to use / note outlet is use for creating nested routes
        />
        </Route>
        <Route
          element={
            <AuthRoutes>
              <Posts />
            </AuthRoutes>
          }
          path="/posts"
        />
        <Route
          element={
            <AuthRoutes>
              <EditPost />
            </AuthRoutes>
          }
          path="/posts/edit/:postId"
        />
        <Route
          element={
            <AuthRoutes>
              <PostDetails />
            </AuthRoutes>
          }
          path="/posts/:postId"
        />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route
          element={
            <AuthRoutes>
              {" "}
              <Profile />
            </AuthRoutes>
          }
          path="/profile"
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
