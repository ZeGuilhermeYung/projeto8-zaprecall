import "./style.css";
import React from "react";
import Deck from "./Deck/Deck";
import IconAnswered from "./IconsAnswered";
import Header from "./Header/Header";
import Result from "./Result/Result";

export default function GameScreen (props) {

  const [resultIcons, setResultIcons] = React.useState([]);
  const [numAnswered, setNumAnswered] = React.useState(0);
  const [rightAnswers, setRightAnswers] = React.useState(0);

  return (
    <section className="game-screen">
      <Header />
      <Deck decks={props.decks} deck={props.deck} setDeck={props.setDeck} selected={props.selected} resultIcons={resultIcons} setResultIcons={setResultIcons} numAnswered={numAnswered} setNumAnswered={setNumAnswered} rightAnswers={rightAnswers} setRightAnswers={setRightAnswers} >
        <IconAnswered resultIcons={resultIcons} setResultIcons={setResultIcons} />
      </Deck>
      <Result decks={props.decks} deck={props.deck} setDeck={props.setDeck} selected={props.selected} totalQuestions={props.totalQuestions} setTotalQuestions={props.setTotalQuestions} numAnswered={numAnswered} setNumAnswered={setNumAnswered} resultIcons={resultIcons} setResultIcons={setResultIcons} rightAnswers={rightAnswers} setRightAnswers={setRightAnswers} targetRightAnsw={props.targetRightAnsw} gameStarted={props.gameStarted} setGameStarted={props.setGameStarted} >
        <IconAnswered resultIcons={resultIcons} setResultIcons={setResultIcons} />
      </Result>
    </section>
  );
}