import { technologies } from "../../data/technologies.js";

function Techs() {
  return (
    <>
      {technologies.map((index) => (
        <li key={index.name}>
          <img
            src={index.img}
            alt={`Imagem do logo da linguagem ${index.name}`}
          />
          <span>{index.name}</span>
        </li>
      ))}
    </>
  );
}

export default Techs;
