export default function Academics ({collageGrade, nameStatute, img, titleDegree}){
  return (
    <div className="card-academics">
      <div className="card-image">
        <img src={` /img/${img}`} />
      </div>
      <div className="card-text">
        <strong>{nameStatute}</strong>
        <h4>{collageGrade}</h4>
        <h3>{titleDegree}</h3>
      </div>
    </div>
  )
}