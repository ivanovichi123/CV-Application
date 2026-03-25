import { useState } from "react";
import "./general-info.css";

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
        /> <br />
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
    <div style={{ display: props.theDisplay }}>
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
      <p>{props.email}</p>
      <p>{props.phoneNumber}</p>
    </div>
  );
}

export {GeneralInfo};
