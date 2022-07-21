export default function FirstScreen() {
  return (
    <section className="first-screen">
      <img src="./assets/img/logo-zaprecall.png" alt="imagem de um raio amarelo com contornos vermelhos" />
      <h1>ZapRecall</h1>
      <select name="decks" id="" placeholder="Escolha seu deck"></select>
      <input type="number" placeholder="Digite sua meta de zaps..." />
      <div class="start-button">Iniciar Recall!</div>
    </section>
  );
}