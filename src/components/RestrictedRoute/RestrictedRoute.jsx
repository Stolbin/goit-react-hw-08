import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isSignedIn = useSelector(selectIsSignedIn);

  return isSignedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
