import fotoRuth from '/public/img/RuthPerfil.jpg'

export default function Aboutme (){
  return(
    <section className="aboutme card" id="aboutme">
      <div className="about-card">
        <img src={fotoRuth} className="fotoUser" alt="foto porfolio Ruth DelgadF"/>
        <div className="descripcion">
          <h2>RUTH ELIZABETH DELGADO</h2>
          <h3>Sobre mí</h3>
          <p>Soy Licenciada en Enfermería profesional con amplia experiencia  en cuidados hospitalarios. Mi compromiso es brindar una atención humanizada y de alta calidad, enfocada en el bienestar y la recuperación de cada paciente. Especializada en 'internación domiciliaria, cuidados post-operatorios, me esfuerzo por generar un ambiente de confianza y seguridad, aplicando mis conocimientos y habilidades con profesionalismo y empatía</p>
        </div>
      </div>
    </section>
  )
}