import { useState } from "react";
import "./general-info.css";

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
  return (
    <div style={{ display:props.theDisplay }}>
      <p>{props.schoolName}</p>
      <p>{props.titleStudy}</p>
      <p>{props.dateStudy}</p>
      <p>{props.projects}</p>
    </div>
  )
}

export default EducationalExperience;
