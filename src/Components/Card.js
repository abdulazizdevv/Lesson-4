// import { SingleUser } from "./SingleUser/SingleUser";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export const Card = ({ obj }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  // const handleMore = () => {
  //   <SingleUser />;
  // };

  return (
    <li className=" mt-3">
      <NavLink className="text-decoration-none  text-dark " to={`/name/${obj.name.common}`}>
        <div className={`card ${theme}`}>
          <img
            style={{ width: "100%", height: "150px" }}
            className="card-img-top mb-3"
            src={obj.flags.svg}
            alt="flags"
          />
          <div>
            <h3
              style={{ fontFamily: "Nunito Sans", fontWeight: "800" }}
              className="card-title"
            >
              {obj.name.common}
            </h3>
            <p
              style={{ fontFamily: "Nunito Sans", fontWeight: "600" }}
              className="card-text"
            >
              Population: {obj.population}
            </p>
            <p
              style={{ fontFamily: "Nunito Sans", fontWeight: "600" }}
              className="card-text"
            >
              Region: {obj.region}
            </p>
            <p
              style={{ fontFamily: "Nunito Sans", fontWeight: "600" }}
              className="card-text"
            >
              Capital: {obj.capital}
            </p>
            <button className="btn btn-primary m-3">more...</button>
          </div>
        </div>
      </NavLink>
    </li>
  );
};
