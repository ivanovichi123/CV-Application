import { useState } from "react";
import "./general-info.css";
import "./content.css";

function EducationalExperience(props) {
  const [schoolName, setSchoolName] = useState("");
  const [titleStudy, setTitleStudy] = useState("");
  const [dateStudy, setDateStudy] = useState("");
  const [projects, setProjects] = useState("");
  return (
    <section>
      <fieldset id="section-2" style={{display: props.formVisible}}>
        <legend>Educational experience</legend>
        <label htmlFor="school-name">School name:</label>
        <input 
          type="text" 
          id="school-name" 
          onChange={(event) => setSchoolName(event.target.value)}
        />
        <label htmlFor="title-study">Title of study:</label>
        <input 
          type="text" 
          id="title-study" 
          onChange={(event) => setTitleStudy(event.target.value)}
        />
        <label htmlFor="date">Date of study:</label>
        <input 
          type="date" 
          id="date" 
          onChange={(event) => setDateStudy(event.target.value)}
        />
        <label htmlFor="projects-made">Projects made by yourself:</label>
        <textarea 
          id="projects-made" 
          rows={3} 
          cols={1}
          onChange={(event) => setProjects(event.target.value)}
        ></textarea>
      </fieldset>
      
      <EducationalContent 
        schoolName = {schoolName}
        titleStudy = {titleStudy}
        dateStudy = {dateStudy}
        projects = {projects}
        theDisplay = {props.infoVisible}
      />

    </section>
  );
}

function EducationalContent(props) {
  const answers = [
    {id: 1, title: "School", info: props.schoolName}, 
    {id: 2, title: "Degree", info: props.titleStudy}, 
    {id: 3, title: "Graduated on", info: props.dateStudy}, 
    {id: 4, title: "Projects", info: props.projects}];

    let count = 0;

  return (
    <div className="theContent" style={{ display:props.theDisplay }}>

      {answers.flatMap(answer => {
        if (answer.info === "") {
          return [];
        } 
        else if (answer.info !== "" && count === 0) {
          count += 1;
          return (
            <div key={answer.id}>
              <h2>Educational Experience</h2>
              <h3>{answer.title}: </h3>
              <p>{answer.info}</p> <br />
            </div>
          )
        }
        else {
          return (
            <div key={answer.id}>
            <h3>{answer.title}: </h3>
            <p>{answer.info}</p> <br />
            </div>
          )
        }
      })}
      
    </div>
  );
}

export default EducationalExperience;
