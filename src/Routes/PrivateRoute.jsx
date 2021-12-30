import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const { Route, Redirect } = require("react-router-dom");

function PrivateRoute({ path, exact, children }) {
  const [Auth] = useContext(AuthContext);

  if (Auth === false) {
    return <Redirect to="/login" />;
  }

  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
}

export default PrivateRoute;
