import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
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
      name: user.name,
      email: user.email,
      password: user.password,
      password2: user.password2,
    };
    console.log(newUser);

    navigate("/dashboard");
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div>
          <h4>
            <b>Register</b> below
          </h4>
          <p>
            Already have an account? <NavLink to="/login">Log in</NavLink>
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
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            value={user.name}
            id="name"
            type="text"
          />
        </div>
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
        <div className="mb-3">
          <label className="form-label" htmlFor="password2">
            Confirm Password
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            value={user.password2}
            id="password2"
            type="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Register;
