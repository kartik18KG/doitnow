import React, { Component } from "react";
import "../layout/navbar.css";

class Home extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div className="section full-height">
        <div className="absolute-center">
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1>
                    <span>T</span>
                    <span>H</span>
                    <span>I</span>
                    <span>S</span>
                    <br />
                    <span>Is</span>
                    <br />
                    <span>Do</span>
                    <span>It</span>
                    <span>Now</span>
                  </h1>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
