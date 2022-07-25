import React from "react";

export default function Result(props) {
  if(props.resultIcons.length === 0) {
    return (
      <footer>
        <div className="counter">
          <h2>{`${props.numAnswered}/${props.totalQuestions} CONCLUÍDOS`}</h2>
        </div>
      </footer>
    );
  } else {
    return (
      <footer>
        <div className="counter started">
          <h2>{`${props.numAnswered}/${props.totalQuestions} CONCLUÍDOS`}</h2>
        </div>
        <div className="icons-results">
          {props.resultIcons}
        </div>
      </footer>
    );
  }
}