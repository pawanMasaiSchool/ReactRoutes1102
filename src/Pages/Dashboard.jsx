import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Dashboard() {
  const [Auth, { handleSignIn, handleSignOut }] = useContext(AuthContext);

  // if (Auth === false) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <div>
      <h2>Dashboard Page</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Dashboard;
