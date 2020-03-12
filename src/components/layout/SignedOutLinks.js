import React from "react";

import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="navbar-nav ml-auto py-4 py-md-0">
      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
        <NavLink className="nav-link" to="/signup">
          SignUp
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
