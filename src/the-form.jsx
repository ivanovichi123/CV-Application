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
        <PracticalExperience formVisible={formVisible ? "" : "none"} infoVisible={formVisible ? "none" : ""} />
        <button id="submit">Submit</button>
      </form>
      <button id="edit"
        onClick={theEdit}
      > Edit </button>
    </main>
  );
}

export default TheForm;