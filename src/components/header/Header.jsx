import Styles from "./header.module.css";
import Logo from "../../assets/portfolio.png";

function Header() {
  return (
    <>
      <header className={Styles.container}>
        <img src={Logo} alt="Portfolio Logo" />
        <nav>
          <span>Sobre</span>
          <span>Stack</span>
          <span>Projetos</span>
        </nav>
        <button>Contato</button>
      </header>
    </>
  );
}

export default Header;
