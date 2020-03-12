import React from "react";
import { connect } from "react-redux";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";
import { Link } from "react-router-dom";
import "./navbar.css";
import $ from "jquery";

class Navbar extends React.Component {
  componentDidMount() {
    $("#switch").on("click", () => {
      console.log("switched");
      if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $("#switch").removeClass("switched");
      } else {
        $("body").addClass("dark");
        $("#switch").addClass("switched");
      }
    });
  }
  render() {
    const { auth } = this.props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
      <div className="navigation-wrap bg-light start-header start-style">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link to="/">
                  <span className="navbar-brand nav-link">DoItNow</span>
                </Link>

                <div id="switch" className="float-right">
                  <div id="circle"></div>
                </div>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  {auth.isLoaded && links}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state,
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
