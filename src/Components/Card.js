

export const Card = ({obj})=>{
  return(
    <li className="col-md-3 mt-3">
      <div className="card">
        <img style={{width:"100%", height:"150px"}} className="card-img-top mb-3" src={obj.flags.svg} alt="flags"/>
        <div>
          <h3 className="card-title">{obj.name.common}</h3>
          <p className="card-text">Population: {obj.population}</p>
          <p className="card-text">Region: {obj.region}</p>
          <p className="card-text">Capital: {obj.capital}</p>
        </div>
      </div>
    </li>
  )
}

