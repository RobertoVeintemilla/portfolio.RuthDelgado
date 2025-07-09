import React from 'react'

import CardExperience from '../components/CardExperience'
import experience from '../data/experiences'

export default function Experiences() {
  return (
    <section className="section spacetop" id="experiences">
      <div className="about-card cardTitle">
        <h2>Experiencia Laboral</h2>
        <p>Podrás conocer en detalle mi trayectoria profesional como Licenciada en Enfermería. Cada experiencia ha sido una oportunidad para aplicar mis conocimientos, desarrollar nuevas habilidades y reafirmar mi compromiso con la salud y el bienestar de los pacientes. 
        </p>
      </div>
     
      <div className="container-experience">
        {
          experience.map((item, index) => {
            return (
              <CardExperience 
                key= {index+item.id+1}
                jobtitle= {item.jobtitle}
                website= {item.website}
                workstation= {item.workstation}
                duration= {item.duration}
                location= {item.location}
                img= {item.img}
                area= {item.area}
              />
            )
          })
        }
      </div>
    </section>
  )
}
