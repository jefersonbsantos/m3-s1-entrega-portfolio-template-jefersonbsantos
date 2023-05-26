import Projects from "./getProjects";
import Styles from "./project.module.css";

function Project() {
  return (
    <>
      <section className={Styles.container}>
        <h2>Projetos</h2>
        <ul>
          <Projects />
        </ul>
      </section>
    </>
  );
}

export default Project;
