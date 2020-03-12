import React from "react";
import { NavLink } from "react-router-dom";
import AddTopicName from "./AddTopicName";
import DeleteButton from "../DeleteButton";
import UpdateTopicName from "./UpdateTopicName";

const DisplayTopicNames = props => {
  const {
    SpecialityId,
    SpecialityName,
    TopicNames,
    Articles,
    displayArticle
  } = props;

  return (
    <div className="">
      {TopicNames &&
        TopicNames.map(item => {
          if (SpecialityId === item.SpecialityId) {
            return (
              <div
                className=" p-0 speciality-topic-container m-1"
                key={item.id}
              >
                <h4 className="float-left topicName">{item.Name}</h4>
                <a
                  type="button"
                  className=" float-right  arrow-down"
                  data-toggle="collapse"
                  data-target={"#" + item.Name}
                >
                  &nbsp;
                  <i class="fas fa-chevron-circle-down"></i>
                </a>
                {/* <div className="">
                  <NavLink
                    to={"/learn/" + SpecialityName + "/" + item.Name}
                    className="btn btn-sm btn-outline-primary float-right"
                  >
                    Start
                  </NavLink>
                  <DeleteButton collectionName="TopicNames" DocId={item.id} />
                </div> */}
                <br />

                <div className="topic-container">
                  <h6 className="">
                    <div id={item.Name} class="topic-name-head collapse">
                      <ol className="list pl-3 m-o">
                        {Articles &&
                          Articles.map(article => {
                            if (item.id == article.TopicId) {
                              return (
                                <span>
                                  <br />
                                  <li class="article-name  pl-4 m-0">
                                    {article.ArticleName}

                                    <a
                                      type="button"
                                      onClick={() => {
                                        displayArticle(article);
                                      }}
                                    >
                                      &nbsp; &nbsp;
                                      <i class=" article-read fas fa-book-reader"></i>
                                      <span className="read-message">
                                        Read Now
                                      </span>
                                    </a>
                                  </li>
                                </span>
                              );
                            } else {
                              return null;
                            }
                          })}
                      </ol>
                    </div>
                  </h6>
                </div>
                <br />

                <br />
              </div>
            );
          }
        })}
      <AddTopicName SpecialityId={SpecialityId} />
    </div>
  );
};

export default DisplayTopicNames;
