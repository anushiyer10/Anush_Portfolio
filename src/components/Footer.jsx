import React from 'react'
import resume from '../data/resume'

export default function Footer(){
  return (
    <footer className="bg-transparent mt-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>© {new Date().getFullYear()} {resume.name}</div>
          <div>
            <a className="me-3 text-accent" href={resume.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="text-accent" href={"mailto:"+resume.email}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
