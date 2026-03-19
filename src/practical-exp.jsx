import { useState } from 'react'
import './general-info.css'

function PracticalExperience() {
  return (
        <fieldset id='section-3'>
          <legend>Practical experience</legend>
          <label htmlFor="company-name">Company name:</label>
          <input type="text" id='company-name'/>
          <label htmlFor="position-title">Position title:</label>
          <input type="text" id='position-title'/>
          <label htmlFor="main-responsibilities">Main responsibilities:</label>
          <textarea id='main-responsibilities' rows={5} cols={1}></textarea>
          <label htmlFor="date-start">Date when you started working:</label>
          <input type="date" id='date-start'/>
          <label htmlFor="date-finish">Date when you finished working:</label>
          <input type="date" id='date-finish'/>
        </fieldset>
  )
}

export default PracticalExperience