import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { RouteProps } from "../App/App.types";

export const RestrictedRoute = ({
  component: Component,
  redirectTo = "/",
}: RouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};


export default RestrictedRoute;