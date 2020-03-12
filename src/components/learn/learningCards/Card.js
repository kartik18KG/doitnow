import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import DeleteButton from "../DeleteButton";
import UpdateCard from "./UpdateCard";
import "./card.css";

const Card = props => {
  const { learningCards, isAdmin } = props;
  console.log(isAdmin);
  return (
    <div className="container">
      <div className="row">
        {learningCards &&
          learningCards.map(item => {
            console.log(item);
            return (
              <div className="col-lg-6">
                <div className="card m-sm-5 " key={item.id}>
                  <img
                    className="card-img-top"
                    width="300px"
                    src={item.imageUrl}
                    alt="Card cap"
                  ></img>
                  <hr />
                  <div>
                    <h2 className="text-center">{item.Name}</h2>
                  </div>
                  <div className="your-progress m-2">
                    <div>Your Progress</div>
                    <div className="progress md-progress">
                      <div
                        className="progress-bar progress-bar-color"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="m-2 mt-4">
                    <NavLink
                      to={"/learn/" + item.Name}
                      className="btn button-outline btn-lg btn-block start"
                    >
                      Start
                    </NavLink>
                    {isAdmin === true ? (
                      <UpdateCard currentCard={item} />
                    ) : null}
                    {isAdmin === true ? (
                      <DeleteButton
                        collectionName="Specialities"
                        DocId={item.id}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAdmin: state.admin.isAdmin
  };
};

export default connect(mapStateToProps)(Card);
