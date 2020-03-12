import React, { Component } from "react";
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

class About extends Component {
  render() {
    const {auth} = this.props
    if(!auth.uid) return <Redirect to="/login" />
    return (
      <div className="container container-width">
        This is the about page
      </div>
    );
  }
}

const mapStateToProps= (state)=>{
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(About)
