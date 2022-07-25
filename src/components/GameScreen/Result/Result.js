import "./style.css";
import React from "react";
import happyEmoji from "../../../assets/img/happy-emoji.png";
import sadEmoji from "../../../assets/img/sad-emoji.png";

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

function RestartButton (props) {

  function restartLevel () {
    props.setGameStarted(false);
  }

  return (
    <div className="restart-button" onClick={restartLevel}>
      <h4>REINICIAR RECALL</h4>
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
          <Message emoji={happyEmoji} titleMessage="Parabéns!" finalMessage={`Você não esqueceu de\nnenhum flashcard!`} />
          <Counter classCounter={"counter started"} numAnswered={props.numAnswered} totalQuestions={props.totalQuestions} />
          <IconResults resultIcons={props.resultIcons} />
          <RestartButton decks={props.decks} deck={props.deck} setDeck={props.setDeck} setAnswered={props.setAnswered} setRightAnswers={props.setRightAnswers} setNumAnswered={props.setNumAnswered} setResultIcons={props.setResultIcons} setGameStarted={props.setGameStarted} />
        </footer>
      );
    } else {
      return (
        <footer>
          <Message emoji={sadEmoji} titleMessage="Putz..." finalMessage={`Ainda faltam alguns...\nMas não desanime!`} />
          <Counter classCounter={"counter started"} numAnswered={props.numAnswered} totalQuestions={props.totalQuestions} />
          <IconResults resultIcons={props.resultIcons} />
          <RestartButton decks={props.decks} deck={props.deck} setDeck={props.setDeck} setAnswered={props.setAnswered} setRightAnswers={props.setRightAnswers} setNumAnswered={props.setNumAnswered} setResultIcons={props.setResultIcons} setGameStarted={props.setGameStarted} />
        </footer>
      );
    } 
  }
}