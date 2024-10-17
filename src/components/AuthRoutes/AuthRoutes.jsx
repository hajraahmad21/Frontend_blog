import { useSelector } from "react-redux";
<<<<<<< HEAD
import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { userAuth } = useSelector((state) => state.auth);
  const [shouldRender, setShouldRender] = useState(false);
  useEffect(() => {
    if (userAuth) {
      setShouldRender(true);
      return;
    }
    setShouldRender(false);
  }, [userAuth]);
  if (!shouldRender) {
    navigate("/login");
  } else {
    return children;
  }
=======
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
const AuthRoutes = ({ children }) => {
  const navigate = useNavigate();

  const { userAuth } = useSelector((state) => state.auth);
  const shouldRenderAuthRoutes = useCallback(() => {
    if (userAuth) {
      return children;
    } else {
      navigate("/login");
    }
  }, [children, navigate, userAuth]);
  return shouldRenderAuthRoutes();
>>>>>>> main
};

export default AuthRoutes;
