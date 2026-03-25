import { useState } from "react";
import "./general-info.css";

function PracticalExperience(props) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsibilities, setMainResponsibilities] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateFinish, setDateFinis] = useState("");
  return (
    <section>
      <fieldset id="section-3" style={{ display: props.formVisible }} >
        <legend>Practical experience</legend>
        <label htmlFor="company-name">Company name:</label>
        <input 
          type="text" 
          id="company-name" 
          onChange={(event) => setCompanyName(event.target.value)}
          />
        <label htmlFor="position-title">Position title:</label>
        <input 
          type="text" 
          id="position-title" 
          onChange={(event) => setPositionTitle(event.target.value)}
          />
        <label htmlFor="main-responsibilities">Main responsibilities:</label>
        <textarea 
          id="main-responsibilities" 
          rows={5} 
          cols={1}
          onChange={(event) => setMainResponsibilities(event.target.value)}
          ></textarea>
        <label htmlFor="date-start">Date when you started working:</label>
        <input 
          type="date" 
          id="date-start" 
          onChange={(event) => setDateStart(event.target.value)}
          />
        <label htmlFor="date-finish">Date when you finished working:</label>
        <input 
          type="date" 
          id="date-finish"
          onChange={(event) => setDateFinis(event.target.value)}
          />
      </fieldset>

      <PracticalContent 
        companyName = {companyName}
        positionTitle = {positionTitle}
        mainResponsibilities = {mainResponsibilities}
        dateStart = {dateStart}
        dateFinish = {dateFinish}
        theDisplay = {props.infoVisible}
      />

    </section>
  );
}

function PracticalContent(props) {
  return (
    <div style={{ display: props.theDisplay}}>
      <p>{props.companyName}</p>
      <p>{props.positionTitle}</p>
      <p>{props.mainResponsibilities}</p>
      <p>{props.dateStart}</p>
      <p>{props.dateFinish}</p>
    </div>
  )
}

export default PracticalExperience;
