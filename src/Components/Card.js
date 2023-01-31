// import { SingleUser } from "./SingleUser/SingleUser";
import { NavLink } from "react-router-dom";

export const Card = ({ obj }) => {
  // const handleMore = () => {
  //   <SingleUser />;
  // };

  return (
    <li className=" mt-3">
      <div className="card">
        <img
          style={{ width: "100%", height: "150px" }}
          className="card-img-top mb-3"
          src={obj.flags.svg}
          alt="flags"
        />
        <div>
          <h3 className="card-title">{obj.name.common}</h3>
          <p className="card-text">Population: {obj.population}</p>
          <p className="card-text">Region: {obj.region}</p>
          <p className="card-text">Capital: {obj.capital}</p>
          <NavLink to={`/name/${obj.name.common}`}>
            <button  className="btn btn-primary m-3">
              more...
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
