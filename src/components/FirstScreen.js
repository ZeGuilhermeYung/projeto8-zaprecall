export default function FirstScreen() {
  return (
    <section className="first-screen">
      <img src="./assets/img/logo-zaprecall.png" alt="imagem de um raio amarelo com contornos vermelhos" />
      <h1>ZapRecall</h1>
      <select name="decks" required>
        <option value="" disabled selected hidden>Escolha seu deck</option>
      </select>
      <input type="number" placeholder="Digite sua meta de zaps..." />
      <div class="start-button"><h2>Iniciar Recall!</h2></div>
    </section>
  );
}