import { useSelector } from "react-redux";
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
};

export default AuthRoutes;
