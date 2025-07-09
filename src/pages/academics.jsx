import React from 'react'

import CardAcademics from '../components/CardAcademics'
import { academics } from '../data/academics.js'

export default function Academics() {
  return(
    <section className="section spacetop" id="academics">
      <div className="about-card cardTitle">
        <h2>Formación Acádemica</h2>
      </div>
      
      <div className="container-experience">
        {
          academics.map((item, index) => {
            return (
              <CardAcademics 
                key= {index + item.id + 1}
                collageGrade = {item.collegeGrade}
                nameStatute = {item.nameStatute}
                img = {item.img}
                titleDegree = {item.titleDegree}
              />
            )
          })
        }
      </div>
    </section>
  )
}