import Deck from "./GameScreen/Deck";
import Header from "./GameScreen/Header";
import Result from "./GameScreen/Result";

export default function GameScreen() {
  return (
    <section className="game-screen hidden">
      <Header />
      <Deck />
      <Result />
    </section>
  );
}