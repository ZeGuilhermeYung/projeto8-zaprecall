import Deck from "./GameScreen/Deck";
import Header from "./GameScreen/Header";
import Results from "./GameScreen/Results";

export default function GameScreen() {
  return (
    <section>
      <Header />
      <Deck />
      <Results />
    </section>
  );
}