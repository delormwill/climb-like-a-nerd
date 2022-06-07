import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div id="Landing">
      <h1>Climbing Journal</h1>
      <p>Get wrecked</p>
      <NavLink to="/login" className="btn btn-outline-primary btn-lg">
        Log In
      </NavLink>
      <NavLink to="/register" className="btn btn-primary btn-lg">
        Register
      </NavLink>
    </div>
  );
}
export default Landing;
