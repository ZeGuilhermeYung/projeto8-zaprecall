import Deck from "./GameScreen/Deck";
import Header from "./GameScreen/Header";
import Result from "./GameScreen/Result";

export default function GameScreen(props) {
  return (
    <section className="game-screen">
      <Header />
      <Deck decks={props.decks} deck={props.deck} setDeck={props.setDeck} />
      <Result />
    </section>
  );
}