import React from "react";

function flipCard () {

}

function Card (props) {
  return (
    <div className="card">
      <div className="card front">
        <h3>Pergunta {props.questionOrder}</h3>
      </div>
      <div className="card question hidden">
        <h2>{props.question}</h2>
      </div>
      <div className="card answer hidden">
        <h2>{props.answer}</h2>
        <div>
          <div>
            <div className="wrong"><h5>Não lembrei</h5></div>
            <div className="right"><h5>Quase não lembrei</h5></div>
            <div className="zap"><h5>Zap!</h5></div>
          </div>
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
      {props.deck.qEa.sort(shuffle).map((pair, index) => <Card key={index} questionOrder={index + 1} question={pair.question} answer={pair.answer} />)}
    </main>
  );
}