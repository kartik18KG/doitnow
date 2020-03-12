// import React from "react";
// import { connect } from "react-redux";
// import { compose } from "redux";
// import { firestoreConnect } from "react-redux-firebase";
// import DisplayTopicNames from "./DisplayTopicNames";
// import { Redirect } from "react-router-dom";
// import "./Topic.css";

// class TopicNames extends React.Component {
//   state = {};
//   render() {
//     const {
//       requiredSpeciality,
//       TopicNames,
//       Specialities,
//       auth,
//       Articles
//     } = this.props;

//     const displayArticle = article => {
//       // console.log(article.id);
//       this.setState({
//         SelectedArticle: article
//       });
//       // console.log(this.state);
//     };
//     // console.log(this.props);

//     const { SelectedArticle } = this.state;

//     if (!auth.uid) return <Redirect to="/login" />;

//     return (
//       <div className="speciality-container">
//         {/* <div className="fill-topic"></div> */}
//         <div className="speciality-name">
//           {/* <div className="name-item">
//             <h6>
//               <a href="http://" target="_blank" rel="noopener noreferrer">
//                 <i class="fa text-primary fa-share-alt"></i>
//               </a>
//               Share This
//             </h6>
//           </div> */}
//           <div className="name-item">
//             <h1 className="mt-3 mb-2">
//               {requiredSpeciality} 
//             </h1>
//             <hr />
//           </div>
//         </div>

//         <div className="speciality-container">
//           <div className="row">

//             <div className="col-lg-4 ">
              
//               <div className="topics-overview">
//                 <h3>Topics Overview</h3>
//               </div>

//              {Specialities &&
//                   Specialities.map(item => {
//                     if (item.Name === requiredSpeciality) {
//                       return (
//                         <div key={item.id} >
                          
//                           <DisplayTopicNames
//                             SpecialityId={item.id}
//                             TopicNames={TopicNames}
//                             SpecialityName={requiredSpeciality}
//                             Articles={Articles}
//                             displayArticle={displayArticle}
//                           />
                          
//                         </div>
//                       );
//                     }
//                   })}
//             </div>
//             {/* <div className="col-12 speciality-topics col-md-4">
              
//               <div className="topics-overview">
//                 <h3>Topics Overview</h3>
//               </div>

//               <div id="" className="cards ">
//                 {Specialities &&
//                   Specialities.map(item => {
//                     if (item.Name === requiredSpeciality) {
//                       return (
//                         <div key={item.id}>
//                           <br />
//                           <DisplayTopicNames
//                             SpecialityId={item.id}
//                             TopicNames={TopicNames}
//                             SpecialityName={requiredSpeciality}
//                             Articles={Articles}
//                             displayArticle={displayArticle}
//                           />
//                           <br />
//                         </div>
//                       );
//                     }
//                   })}
//               </div>
//             </div> */}

//             {/* <div class="col-12 col-md-8">
//               <div className="topics-overview">
//                 {TopicNames &&
//                   SelectedArticle &&
//                   TopicNames.map(item => {
//                     if (item.id === SelectedArticle.TopicId) {
//                       return (
//                         <div id="topic-heading" key={item.id}>
//                           <h3>{item.Name}</h3>
//                         </div>
//                       );
//                     }
//                   })}
//               </div>

//               <div className="content">
//                 {SelectedArticle && (
//                   <div>
//                     <div className="heading">
//                       <h4>{SelectedArticle.ArticleName}</h4>
//                     </div>

//                     <div className="article-content">
//                       <h5>{SelectedArticle.ArticleContent}</h5>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   const { specialityName } = ownProps.match.params;
//   return {
//     requiredSpeciality: specialityName,
//     TopicNames: state.firestore.ordered.TopicNames,
//     Specialities: state.firestore.ordered.Specialities,
//     auth: state.firebase.auth,
//     Articles: state.firestore.ordered.Articles
//   };
// };

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     { collection: "TopicNames" },
//     { collection: "Specialities" },
//     { collection: "Articles" }
//   ])
// )(TopicNames);
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import DisplayTopicNames from "./DisplayTopicNames";
import { Redirect } from "react-router-dom";
import "./Topic.css";

class TopicNames extends React.Component {
  state = {
    selected: false
  };
  render() {
    const {
      requiredSpeciality,
      TopicNames,
      Specialities,
      auth,
      Articles
    } = this.props;

    const displayArticle = article => {
      console.log(article.id);

      this.setState({
        SelectedArticle: article,
        selected: true
      });
      // console.log(this.state);
    };
    console.log(this.props);

    const { SelectedArticle } = this.state;

    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <div className="speciality-container">
        <div className="speciality-name">
          <div className="name-item float-right">
            <h6>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i class="fa share-icon text-primary fa-share-alt"></i>
              </a>
              Share This
            </h6>
          </div>
          <div className="name-item float-left">
            <h2 className="">{requiredSpeciality}</h2>
          </div>
        </div>
        <br />
        <div class="speciality-container">
          <div class="row">
            <div class="col-12 topic-ovr-container col-md-4">
              <div className="topics-overview">
                <a
                  type="button"
                  id="coll"
                  className="float-right speciality-dropdown arrow-down"
                  data-toggle="collapse"
                  data-target={"#specialities"}
                >
                  &nbsp;
                  <i class="fas list-down  fa-chevron-circle-down"></i>
                </a>
                <h3 className="overview">Topics Overview</h3>
              </div>
              <br />

              <div id="specialities" className="">
                <div id="" className="cards ">
                  {Specialities &&
                    Specialities.map(item => {
                      if (item.Name === requiredSpeciality) {
                        return (
                          <div key={item.id}>
                            <br />
                            <DisplayTopicNames
                              SpecialityId={item.id}
                              TopicNames={TopicNames}
                              SpecialityName={requiredSpeciality}
                              Articles={Articles}
                              displayArticle={displayArticle}
                            />
                            <br />
                          </div>
                        );
                      }
                    })}
                </div>
              </div>
            </div>

            <div class="col-12 article-container col-md-8">
              <div id="" className="article ">
                <div className="card">
                  {this.state.selected ? (
                    <div>
                      <div className="card-header">
                        {TopicNames &&
                          SelectedArticle &&
                          TopicNames.map(item => {
                            if (item.id === SelectedArticle.TopicId) {
                              return (
                                <div>
                                  <div className=" article-name-heading ">
                                    <h4>{SelectedArticle.ArticleName}</h4>
                                  </div>

                                  <div
                                    id="topic-heading "
                                    className="float-right"
                                    key={item.id}
                                  >
                                    <h6>{item.Name}</h6>
                                  </div>
                                </div>
                              );
                            }
                          })}
                      </div>
                      <div className="card-body">
                        {SelectedArticle && (
                          <div>
                            <p className="card-text scroll">
                              <span>{SelectedArticle.ArticleContent}</span>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="nts-message">
                      Nothing to show, select an article first!!!!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { specialityName } = ownProps.match.params;
  return {
    requiredSpeciality: specialityName,
    TopicNames: state.firestore.ordered.TopicNames,
    Specialities: state.firestore.ordered.Specialities,
    auth: state.firebase.auth,
    Articles: state.firestore.ordered.Articles
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "TopicNames" },
    { collection: "Specialities" },
    { collection: "Articles" }
  ])
)(TopicNames);
