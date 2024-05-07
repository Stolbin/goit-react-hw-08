import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isSignedIn = useSelector(selectIsSignedIn);

  return isSignedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
