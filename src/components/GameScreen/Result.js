import React from "react";

function Counter (props) {
  return (
    <div className={props.classCounter}>
      <h2>{`${props.numAnswered}/${props.totalQuestions} CONCLUÍDOS`}</h2>
    </div>
  );
}

function IconResults (props) {
  return (
    <div className="icons-results">
      {props.resultIcons}
    </div>
  );
}

function Message (props) {
  return (
    <div className="result-message">
      <div className="first-message">
        <img src={props.emoji} alt="" />
        <h2><strong>{props.titleMessage}</strong></h2>
      </div>
      <div className="final-message">
        <h2>{props.finalMessage}</h2>
      </div>
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
    if (props.numAnswered < props.totalQuestions) {
      return (
        <footer>
          <Counter classCounter={"counter started"} numAnswered={props.numAnswered} totalQuestions={props.totalQuestions} />
          <IconResults resultIcons={props.resultIcons} />
        </footer>
      );
    }
    if (props.numAnswered === props.totalQuestions && props.rightAnswers >= props.targetRightAnsw) {
      return (
        <footer>
          <Message emoji="./assets/img/happy-emoji.png" titleMessage="Parabéns!" finalMessage={`Você não esqueceu de\nnenhum flashcard!`} />
          <Counter classCounter={"counter started"} numAnswered={props.numAnswered} totalQuestions={props.totalQuestions} />
          <IconResults resultIcons={props.resultIcons} />
        </footer>
      );
    } else {
      return (
        <footer>
          <Message emoji="./assets/img/sad-emoji.png" titleMessage="Putz..." finalMessage={`Ainda faltam alguns...\nMas não desanime!`} />
          <Counter classCounter={"counter started"} numAnswered={props.numAnswered} totalQuestions={props.totalQuestions} />
          <IconResults resultIcons={props.resultIcons} />
        </footer>
      );
    }
    
  }
}