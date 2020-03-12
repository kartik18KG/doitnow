import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authAction";
import {CheckAdmin} from "../../store/actions/adminActions"

class SignedInLinks extends Component {
  componentDidMount(){
    this.props.isAdmin()
  }
  render(){
    return (
      <ul className="navbar-nav ml-auto py-4 py-md-0">
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <NavLink to="/learn" className="nav-link">
            Learn
          </NavLink>
        </li>
  
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <NavLink
          className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            to="/contactus"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Contact
          </NavLink>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Twitter
            </a>
            <a className="dropdown-item" href="#">
              Instagram
            </a>
            <a className="dropdown-item" href="#">
              Mail
            </a>
          </div>
        </li>
  
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <a type="button" onClick={this.props.SignOut} className="nav-link">
            LogOut
          </a>
        </li>
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return {
    state,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    SignOut: () => dispatch(signOut()),
    isAdmin: ()=>dispatch(CheckAdmin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
