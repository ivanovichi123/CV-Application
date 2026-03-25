import {GeneralInfo} from "./general-info";
import EducationalExperience from "./educational-exp";
import PracticalExperience from "./practical-exp";
import { useState } from "react";

function TheForm() {
  function theSubmit(e) {
    e.preventDefault();
    setFormVisible(false);
  }

  function theEdit() {
    setFormVisible(true);
  }

  const [formVisible, setFormVisible] = useState(true);

  return (
    <main id="mainInfo">
      <form onSubmit={theSubmit}>
        <GeneralInfo formVisible={formVisible ? "" : "none"} infoVisible={formVisible ? "none" : ""} />
        <EducationalExperience formVisible={formVisible ? "" : "none"} infoVisible={formVisible ? "none" : ""} />
        <PracticalExperience />
        <button id="submit">Submit</button>
      </form>
      <button id="edit"
        onClick={theEdit}
      > Edit </button>
    </main>
  );
}

export default TheForm;

//Nuevisima idea: GeneralContnet no pasarlo como componente sino que tenerlo aqui como codigo y que reciba como props la informacion,
// el objetivo debe ser usar props para recibir la infromacion de los states

// Idea: Hacer que the-frm alla un state para display none en cada parte para cuando usceda un submit,
//y para cada uno de los componentes hacer que tengan otro componente que guardara los datos
