import React from "react";

function Counter (props) {
  return(
    <div className={props.classCounter}>
      <h2>{`${props.numAnswered}/${props.totalQuestions} CONCLUÍDOS`}</h2>
    </div>
  );
}

function IconResults (props) {
  return(
    <div className="icons-results">
      {props.resultIcons}
    </div>
  );
}

export default function Result (props) {
  if(props.resultIcons.length === 0) {
    return (
      <footer>
        <Counter classCounter={"counter"} numAnswered={props.numAnswered} totalQuestions={props.totalQuestions} />
      </footer>
    );
  } else {
    return (
      <footer>
        <Counter classCounter={"counter started"} numAnswered={props.numAnswered} totalQuestions={props.totalQuestions} />
        <IconResults resultIcons={props.resultIcons} />
      </footer>
    );
  }
}