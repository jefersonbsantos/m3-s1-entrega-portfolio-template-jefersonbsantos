import { user } from "../../data/user.js";
import whatsLogo from "../../assets/whatsapp-icon.png";
import linkedinLogo from "../../assets/linkedin-icon.png";
import githubLogo from "../../assets/github-icon.png";
import Styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <section className={Styles.container}>
        <div>
          <h2>Contato</h2>
          <div>
            <img src={whatsLogo} alt="Logo do whatsapp" />
            <img src={linkedinLogo} alt="Logo do LinkedIn" />
            <img src={githubLogo} alt="Logo do Github" />
          </div>
        </div>
        <p>
          Todos os direitos reservados - <span>{user}</span>
        </p>
      </section>
    </>
  );
}

export default Footer;
