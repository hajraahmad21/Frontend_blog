import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Login from "../User/login";
// eslint-disable-next-line react/prop-types
const AuthRoutes = ({ children }) => {
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
    return <Login />;
  } else {
    return children;
  }
};

export default AuthRoutes;
