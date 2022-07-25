import "./style.css";
import logoZaprecall from "../../../assets/img/logo-zaprecall.png";

export default function Header() {
  return (
    <header>
      <img src={logoZaprecall} alt="imagem de um raio amarelo com contornos vermelhos" />
      <h1>ZapRecall</h1>
    </header>
  );
}