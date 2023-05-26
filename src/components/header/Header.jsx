import Styles from "./header.module.css";

function Header() {
  return (
    <>
      <header className={Styles.container}>
        <p>Portfólio</p>
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
