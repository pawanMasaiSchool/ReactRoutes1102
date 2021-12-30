import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const [Auth, { handleSignIn }] = useContext(AuthContext);

  if (Auth === true) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <h2>Login Page</h2>
      <button onClick={handleSignIn}>Sign In</button>
    </>
  );
}

export default Login;
