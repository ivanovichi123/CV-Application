import { useState } from "react";
import "../styles/general-info.css";
import "../styles/content.css";

function GeneralInfo(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <section>
      <fieldset id="section-1" style={{ display: props.formVisible }}>
        <legend>General information</legend>
        <label htmlFor="first-name">
          First name/s:<span>*</span>
        </label>
        <input
          type="text"
          id="first-name"
          required
          onChange={(event) => setFirstName(event.target.value)}
        />
        <label htmlFor="last-name">
          Last name/s:<span>*</span>
        </label>
        <input
          type="text"
          id="last-name"
          required
          onChange={(event) => setLastName(event.target.value)}
        />
        <label htmlFor="email">
          Email:<span>*</span>
        </label>
        <input
          type="email"
          id="email"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="phone-number">
          Phone number:<span>*</span>
        </label>
        <input
          type="tel"
          id="phone-number"
          required
          onChange={(event) => setPhoneNumber(event.target.value)}
        />{" "}
        <br />
      </fieldset>

      <GeneralContent
        firstName={firstName}
        lastName={lastName}
        email={email}
        phoneNumber={phoneNumber}
        theDisplay={props.infoVisible}
      />
    </section>
  );
}

function GeneralContent(props) {
  return (
    <div className="theContent" style={{ display: props.theDisplay }}>
      <h1>Curriculum</h1>
      <h3>Name: </h3>
      <p>
        {props.firstName} {props.lastName}
      </p>{" "}
      <br />
      <h3>Email: </h3>
      <p>{props.email}</p> <br />
      <h3>Phone number: </h3>
      <p>{props.phoneNumber}</p>
    </div>
  );
}

export { GeneralInfo };
