import { useState } from 'react'
import './general-info.css'

function EducationalExperience() {
  return (
        <fieldset id='section-2'>
          <legend>Educational experience</legend>
          <label htmlFor="school-name">School name:</label>
          <input type="text" id='school-name'/>
          <label htmlFor="title-study">Title of study:</label>
          <input type="text" id='title-study'/>
          <label htmlFor="date">Date of study:</label>
          <input type="date" id='date'/>
          <label htmlFor="main-responsibilities">Projects made by yourself:</label>
          <textarea id='main-responsibilities' rows={3} cols={1}></textarea>
        </fieldset>
  )
}

export default EducationalExperience