import React from "react";
import IconAnswered from "./IconsAnswered";

function Card (props) {

  const [cardState, setCardState] = React.useState("front");
  const [answered, setAnswered] = React.useState("");
  const [answerIcon, setAnswerIcon] = React.useState("play-outline");

  function statusAnswer(status, icon) {
    setAnswered(status);
    setAnswerIcon(icon);
    setCardState("front");
    props.setNumAnswered(props.numAnswered + 1);
    props.setResultIcons([...props.resultIcons, <IconAnswered key={props.numAnswered} answered={status} answerIcon={icon} />]);
  }

  switch (cardState) {
    case "front":
      return (
        <div className={`card front ${answered}`} onClick={() => {setCardState("question")}}>
          <h3>Pergunta {props.questionOrder}</h3>
          <IconAnswered answered={answered} answerIcon={answerIcon} />
        </div>
      );
    case "question":
      return (
        <div className="card question">
          <h2>{props.question}</h2>
          <img src="./assets/img/turn-arrow.png" alt="virar para a resposta" onClick={() => {setCardState("answer")}} />
        </div>
      );
    case "answer":
      return (
        <div className="card answer">
          <h2>{props.answer}</h2>
          <div>
            <div className="recall wrong" onClick={() => statusAnswer("wrong", "close-circle")}><h5>Não lembrei</h5></div>
            <div className="recall almost" onClick={() => statusAnswer("almost", "help-circle")}><h5>Quase não lembrei</h5></div>
            <div className="recall right" onClick={() => statusAnswer("right", "checkmark-circle")}><h5>Zap!</h5></div>
          </div>
        </div>
      );
    default:
    break;
  };
}    

export default function Deck(props) {

  return (
    <main>
      {props.deck.map((pairQeA, index) => <Card cardState={props.cardState} setCardState={props.setCardState} key={index} questionOrder={index + 1} question={pairQeA.question} answer={pairQeA.answer} resultIcons={props.resultIcons} setResultIcons={props.setResultIcons} numAnswered={props.numAnswered} setNumAnswered={props.setNumAnswered} />)}
    </main>
  );
}