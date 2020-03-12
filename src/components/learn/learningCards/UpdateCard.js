import React from "react";
import { connect } from "react-redux";
import { Update } from "../../../store/actions/learningCardsAction";

class UpdateCard extends React.Component {
  state = {};

  handleInput = e => {
    const { currentCard } = this.props;
    this.setState({
      [e.target.id]: e.target.value,
      id: currentCard.id
    });
  };
  handleUpdate = e => {
    e.preventDefault();
    this.props.updateCard("Specialities", this.state);
  };
  render() {
    // console.log(this.props);
    const { currentCard } = this.props;
    const currentId = currentCard.id;
    // console.log(currentCard);
    return (
      <div className="container m-0 p-0 ">
        <button
          type="button"
          className="btn btn-white btn-lg btn-block button-outline mt-2 "
          data-toggle="modal"
          data-target={"#" + currentId}
        >
          <strong>Update</strong>
        </button>

        <div
          className="modal fade"
          id={currentId}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog " role="document">
            <div className="modal-content newsletter">
              <div className="modal-header">
                <h4 className="modal-title title" id="exampleModalLabel">
                  Update Card
                </h4>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body content">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      id="Name"
                      placeholder="Name of the Card"
                      defaultValue={currentCard.Name}
                      className="form-control"
                      onChange={this.handleInput}
                    />
                    <br />
                    <input
                      type="text"
                      id="imageUrl"
                      placeholder="Image Url"
                      className="form-control "
                      defaultValue={currentCard.imageUrl}
                      onChange={this.handleInput}
                    />
                    <button
                      className="btn button-outline float-right m-3"
                      onClick={this.handleUpdate}
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCard: (CollectionName, state) =>
      dispatch(Update(CollectionName, state))
  };
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCard);
