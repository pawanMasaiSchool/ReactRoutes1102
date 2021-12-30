import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Settings from "../Pages/Settings";
import PrivateRoute from "./PrivateRoute";

// if user clicks on dashboard or settings then it will
//redirect him/her to the login page untill signed in

function AllRoutes() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path={"/dashboard"} exact={true}>
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/settings" exact={true}>
          <Settings />
        </PrivateRoute>
      </Switch>
      {/* <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route> */}
    </>
  );
}

export default AllRoutes;
