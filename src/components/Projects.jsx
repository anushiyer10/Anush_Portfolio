import React, { useState } from 'react'
import resume from '../data/resume'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import Section from "./Section";

export default function Projects(){
  const [active, setActive] = useState(null)

  return (
    <Section id='projects' title='Personal Projects'>
      <div className="row justify-content-center">
        {resume.projects.map((p, idx)=>(
          <motion.div key={idx} className="col-md-5 col-lg-4 m-3"
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}}>
            <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6}>
              <div className="card glass p-3 h-100" onClick={()=>setActive(p)} style={{cursor:'pointer'}}>
                <h5>{p.title}</h5>
                <p><strong>{p.tech.join(', ')}</strong></p>
                <p className="text-accent mb-2">{p.description}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {active && (
        <div className="modal fade show d-block" tabIndex="-1" onClick={()=>setActive(null)}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-light p-4">
              <h4>{active.title}</h4>
              <p><strong>Tech:</strong> {active.tech.join(', ')}</p>
              <p>{active.description}</p>
              <button className="btn btn-primary mt-2" onClick={()=>setActive(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}
