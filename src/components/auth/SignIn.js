import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authAction";
import { LoginWithGoogle } from "../../store/actions/authAction";
import {Redirect} from "react-router-dom"


class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleGoogleLogin = e => {
    e.preventDefault();
    this.props.GoogleLogin();
  };

  render() {
    const {auth} = this.props
    if(auth.uid) return <Redirect to="/"/>
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h4 className="grey-text text-darken-3">Log In </h4>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-danger">Login</button>
          </div>
        </form>
        OR
        <div>
          <button
            onClick={this.handleGoogleLogin}
            className=" btn btn-light LoginWithGoogle"
          >
            Login With Google {" "}
            <img
              src="https://www.gstatic.com/mobilesdk/160512_mobilesdk/auth_service_google.svg"
              alt="Google Logo"
            />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth:state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)),
    GoogleLogin: () => dispatch(LoginWithGoogle())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
