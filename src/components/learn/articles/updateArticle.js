import React from "react"
import {connect} from "react-redux"
import {Update} from "../../../store/actions/learningCardsAction"

class UpdateArticle extends React.Component{
    state = {};
      handleInput = e => {
        this.setState({
          [e.target.id]: e.target.value
        });
      };
      handleUpdate = e => {
        e.preventDefault();
        this.props.updateArticle("Articles",{
            ...this.state,
            id: this.props.Article.id
        })
      };
    render(){
        const {Article} = this.props
        return(
    <div className="container ">
        <button
          type="button" 
          className="btn btn-white text-danger text- float-right"
          data-toggle="modal" 
          data-target="#exampleModal"
        >
          <strong> Update</strong>
        </button>
        
        <div
          className="modal fade" 
          id="exampleModal"
          tabIndex="-1" 
          role="dialog"
          aria-labelledby="exampleModalLabel" 
          aria-hidden="true"
        >
          <div className="modal-dialog " role="document">
            <div className="modal-content newsletter">
              <div className="modal-header">
                <h4
                  className="modal-title title" 
                  id="exampleModalLabel"
                >
                  Update a Article 
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
                      id="ArticleName"
                      className="form-control"
                      onChange={this.handleInput} 
                      defaultValue={Article.ArticleName}
                    />
                    <br />
                    <textarea className="form-control" 
                    id="ArticleContent" 
                    cols="30" rows="10" 
                    onChange={this.handleInput}
                    defaultValue={Article.ArticleContent}
                    ></textarea>
                    <button
                      className="btn btn-outline-primary float-right m-3"
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
        )
    }
}



const mapDispatchToProps = (dispatch)=>{
    return{
        updateArticle: (CollectionName,state)=> dispatch(Update(CollectionName,state))
    }
}

export default connect(null, mapDispatchToProps)(UpdateArticle)