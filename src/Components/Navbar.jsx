import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
}

export default Navbar;
