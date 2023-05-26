import Techs from "./getTechs";
import Styles from "./tech.module.css";

function Tech() {
  return (
    <>
      <section className={Styles.container}>
        <h2>Tecnologias</h2>
        <ul>
          <Techs />
        </ul>
      </section>
    </>
  );
}

export default Tech;
