import React from "react";
import Deck from "./GameScreen/Deck";
import IconAnswered from "./GameScreen/IconsAnswered";
import Header from "./GameScreen/Header";
import Result from "./GameScreen/Result";

export default function GameScreen(props) {

  const [resultIcons, setResultIcons] = React.useState([]);
  const [numAnswered, setNumAnswered] = React.useState(0);

  return (
    <section className="game-screen">
      <Header />
      <Deck decks={props.decks} deck={props.deck} setDeck={props.setDeck} resultIcons={resultIcons} setResultIcons={setResultIcons} numAnswered={numAnswered} setNumAnswered={setNumAnswered} >
        <IconAnswered resultIcons={resultIcons} setResultIcons={setResultIcons} />
      </Deck>
      <Result totalQuestions={props.totalQuestions} setTotalQuestions={props.setTotalQuestions} numAnswered={numAnswered} setNumAnswered={setNumAnswered} resultIcons={resultIcons} setResultIcons={setResultIcons} >
        <IconAnswered resultIcons={resultIcons} setResultIcons={setResultIcons} />
      </Result>
    </section>
  );
}