import React, { useState } from 'react'
import resume from '../data/resume'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import Section from "./Section";

export default function Skills(){
  const [filter, setFilter] = useState('all')
  const categories = Object.keys(resume.skills)
  const filtered = filter === 'all'
    ? Object.entries(resume.skills)
    : [[filter, resume.skills[filter]]]

  return (
    <Section id='skills' title='skills'>


      <div className="row justify-content-center">
        {filtered.map(([cat, list],i)=>(
          <motion.div className="col-md-5 col-lg-3 m-2" key={i}
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}}>
            <Tilt glareEnable={true} glareColor="lightblue" tiltMaxAngleX={8} tiltMaxAngleY={8}>
              <div className="card glass p-3 h-100">
                <h6 className="text-accent mb-2">{cat.toUpperCase()}</h6>
                {list.map((item,j)=><div key={j} className="skill-badge">{item}</div>)}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
   
    </Section>
  )
}
