import { projects } from "../../data/projects.js";
import gitIcon from "../../assets/git-icon.png";

function Projects() {
  return (
    <>
      {projects.map((index) => (
        <li key={index.name}>
          <div>
            <h3>{index.name}</h3>
            <img src={gitIcon} alt="Logo do GitHub" />
          </div>
          <p>{index.descricao}</p>
          <span>Saiba mais</span>
        </li>
      ))}
    </>
  );
}

export default Projects;
