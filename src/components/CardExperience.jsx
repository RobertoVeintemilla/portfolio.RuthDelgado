export default function Experience ({jobtitle, workstation, website, duration, location, img, area}){
  return (
    <div className="card-experience">
      <div className="card-image">
        <img src={`/img/${img}`} />
      </div>
      <div className="card-text">
        <h3>{jobtitle}</h3>
        <span><strong>Duración: </strong>{duration}</span>
        <h2>{workstation}</h2>
        <p>{area}</p>
        <p>{location}</p>
      </div>
      <a href={website} target="_blank">
      <div className="card-website">
        <botton>Visitar sitio web</botton>
      </div></a>
    </div>
  )
}
