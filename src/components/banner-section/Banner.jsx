import { username } from "../../data/user.js";
import BannerImg from "../../assets/banner-img.png";
import Styles from "./banner.module.css";

function Banner() {
  return (
    <>
      <section className={Styles.container}>
        <span>{username}</span>
        <h1>Bem vindo ao meu portfólio</h1>
        <p>Uma frase interessante sobre mim</p>
        <button>Saiba mais</button>
        <img
          src={BannerImg}
          alt="Imagem da tela de um computador com várias pop-ups ao redor"
        />
      </section>
    </>
  );
}

export default Banner;
