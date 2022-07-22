import React from "react";

function Card (props) {
  return (
    <div className="card">
      <div className="card-front">
        <h2>Pergunta {props.questionOrder}</h2>
      </div>
      <div className="card-question hidden">
        <h2>Pergunta {props.question}</h2>
      </div>
      <div className="card-answer hidden">
        <h2>Pergunta {props.answer}</h2>
      </div>
    </div>
    );
}

export default function Deck(props) {
    return (
      <main>
        {props.deck.qEa.map((pair, index) => <Card key={index} questionOrder={index + 1} question={pair.question} answer={pair.answer} />)}
      </main>
    );
}