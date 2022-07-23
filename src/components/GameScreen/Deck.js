import React from "react";

function Card (props) {

  const [cardState, setCardState] = React.useState("front");
  console.log(cardState);
  switch (cardState) {
    case "front":
      return (
        <div className="card front" onClick={() => {setCardState("question")}}>
          <h3>Pergunta {props.questionOrder}</h3>
          <ion-icon name="play-outline"></ion-icon>
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
            <div className="recall wrong"><h5>Não lembrei</h5></div>
            <div className="recall almost"><h5>Quase não lembrei</h5></div>
            <div className="recall right"><h5>Zap!</h5></div>
          </div>
        </div>
    );
  };
}     



export default function Deck(props) {

  function shuffle () {
    return Math.random() - 0.5;
  }

  return (
    <main>
      {props.deck.qEa.sort(shuffle).map((pairQeA, index) => <Card cardState={props.cardState}  setCardState={props.setCardState} key={index} questionOrder={index + 1} question={pairQeA.question} answer={pairQeA.answer} />)}
    </main>
  );
}