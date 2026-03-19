import { useState } from 'react'
import './general-info.css'

function GeneralInfo() {
  const [firstName, setFirstName] = useState("First name");
  const [lastName, setLastName] = useState("Last name");
  const [email, setEmail] = useState("Email");
  const [phoneNumber, setPhoneNumber] = useState("Phone number");

  return (
        <fieldset id='section-1'>
          <legend>General information</legend>
          <label htmlFor="first-name">First name/s:<span>*</span></label>
          <input type="text" id='first-name' required
            onChange={(event) => setFirstName(event.target.value)}
          />

          <label htmlFor="last-name">Last name/s:<span>*</span></label>
          <input type="text" id='last-name' required
          />

          <label htmlFor="email">Email:<span>*</span></label>
          <input type="email" id='email' required
          />

          <label htmlFor="phone-number">Phone number:<span>*</span></label>
          <input type="tel" id='phone-number' required
          /> <br />

        </fieldset>
  )
}

export default GeneralInfo
