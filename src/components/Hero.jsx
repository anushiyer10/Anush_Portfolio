import React from 'react'
import resume from '../data/resume'
import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Hero(){
  const [text] = useTypewriter({
    words: ['Data Scientist', 'GenAI Engineer', 'ML Developer','Math Enthusiast'],
    loop: {},
    delaySpeed: 1700,
  })

  return (
    <section id="hero" className="d-flex align-items-center justify-content-center" style={{minHeight:'100vh'}}>
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="text-center">
        <h1 className="display-4 fw-bold mb-3">{resume.name}</h1>
        <h4 className="mb-4">
          <span>{text}</span>
          <Cursor cursorColor="#3dbaff" />
        </h4>
        <p className="lead mb-4" style={{maxWidth:700, margin:'0 auto'}}>{resume.summary}</p>
        <div className="d-flex justify-content-center gap-3">
          <a className="btn btn-outline-accent" href={resume.linkedin} target="_blank"><FaLinkedin className="me-2"/>LinkedIn</a>
          <a className="btn btn-outline-accent" href={"mailto:"+resume.email}><FaEnvelope className="me-2"/>Email</a>
        </div>
      </motion.div>
    </section>
  )
}
