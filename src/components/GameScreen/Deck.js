import React from "react";

function Card (props) {

  const [frontClass, setFrontClass] = React.useState("front");
  const [questionClass, setQuestionClass] = React.useState("question hidden");
  const [answerClass, setAnswerClass] = React.useState("answer hidden");

  function flipCard (cardClass) {
    switch (cardClass) {
      case "front":
        setQuestionClass("question");
        setFrontClass("front hidden");
        break;
      case "question":
        setAnswerClass("answer");
        setQuestionClass("question hidden");
        break;
      case "answer":
        setFrontClass("front");
        setAnswerClass("answer hidden");
        break;
    }     
  }

  return (
    <div>
      <div className={`card ${frontClass}`} onClick={() => flipCard(frontClass)}>
        <h3>Pergunta {props.questionOrder}</h3>
        <ion-icon name="play-outline"></ion-icon>
      </div>
      <div className={`card ${questionClass}`}>
        <h2>{props.question}</h2>
      </div>
      <div className={`card ${answerClass}`}>
        <h2>{props.answer}</h2>
        <div>
          <div className="wrong"><h5>Não lembrei</h5></div>
          <div className="right"><h5>Quase não lembrei</h5></div>
          <div className="zap"><h5>Zap!</h5></div>
        </div>
      </div>
    </div>
    );
}

export default function Deck(props) {

  function shuffle () {
    return Math.random() - 0.5;
  }

  return (
    <main>
      {props.deck.qEa.sort(shuffle).map((pairQeA, index) => <Card key={index} questionOrder={index + 1} question={pairQeA.question} answer={pairQeA.answer} />)}
    </main>
  );
}