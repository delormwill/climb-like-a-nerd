import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      email: user.email,
      password: user.password,
    };
    console.log(newUser);

    navigate("/dashboard");
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div>
          <h4>
            <b>Login</b> below
          </h4>
          <p className="">
            Don't have an account?{" "}
            <NavLink to="/register">Sign up here</NavLink>
          </p>
        </div>
        <NavLink to="/">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </NavLink>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            value={user.email}
            id="email"
            type="email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            value={user.password}
            id="password"
            type="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
