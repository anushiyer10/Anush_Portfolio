import React from 'react'
import resume from '../data/resume'
import Section from "./Section";

export default function Education(){
  return (
    <Section id='education' title='education'>
      <div className="card glass p-3">
        <h5>{resume.education.school}</h5>
        <p>{resume.education.degree} • {resume.education.years} • CGPA: {resume.education.cgpa}</p>
        <p><strong>Certifications:</strong> {resume.certifications.join(' · ')}</p>
      </div>
    </Section>
  )
}
