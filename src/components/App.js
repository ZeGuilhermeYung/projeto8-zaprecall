import FirstScreen from "./FirstScreen.js";
import GameScreen from "./GameScreen.js";
import React from "react";

export default function App() {

  const [deck, setDeck] = React.useState([]);

  return (
    <div>
      <FirstScreen deck={deck} setDeck={setDeck} />
      <GameScreen deck={deck} setDeck={setDeck} />
    </div>
  );
}