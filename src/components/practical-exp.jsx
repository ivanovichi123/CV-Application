import { useState } from "react";
import "../styles/general-info.css";
import "../styles/content.css";

function PracticalExperience(props) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsibilities, setMainResponsibilities] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateFinish, setDateFinis] = useState("");
  return (
    <section>
      <fieldset id="section-3" style={{ display: props.formVisible }}>
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
        companyName={companyName}
        positionTitle={positionTitle}
        mainResponsibilities={mainResponsibilities}
        dateStart={dateStart}
        dateFinish={dateFinish}
        theDisplay={props.infoVisible}
      />
    </section>
  );
}

function PracticalContent(props) {
  const answers = [
    { id: 1, title: "Company", info: props.companyName },
    { id: 2, title: "Position", info: props.positionTitle },
    { id: 3, title: "Responsibilities", info: props.mainResponsibilities },
    {
      id: 4,
      title: "Time worked",
      info: `${props.dateStart} - ${props.dateFinish}`,
    },
  ];

  let count = 0;

  return (
    <div className="theContent" style={{ display: props.theDisplay }}>
      {answers.flatMap((answer) => {
        if (answer.info === "") {
          return [];
        } else if (answer.info !== "" && count === 0) {
          count += 1;
          return (
            <div key={answer.id}>
              <h2>Practical Experience</h2>
              <h3>{answer.title}: </h3>
              <p>{answer.info}</p> <br />
            </div>
          );
        } else {
          return (
            <div key={answer.id}>
              <h3>{answer.title}: </h3>
              <p>{answer.info}</p> <br />
            </div>
          );
        }
      })}
    </div>
  );
}

export default PracticalExperience;
