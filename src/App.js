import Header from "./Components/Header";
import { Card } from "./Components/Card";
import "./Components/Header.scss";
import "./Components/Country.scss";
import "./Components/Card.scss";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Loading from "./assets/images/Spinner.svg"

function App() {
  const elInput = useRef();
  const elSelect = useRef();
  const [country, setCountry] = useState({
    isLoading: false,
    data: [],
    isError: "",
  });

  useEffect(() => {
    setCountry({
      ...country,
      isLoading: true,
    });
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCountry({
            ...country,
            isLoading: false,
            data: data,
          });
        }
      })
      .catch((err) => {
        if (err) {
          setCountry({
            ...country,
            isLoading: false,
            data: [],
            isError: err.message,
          });
        }
      });
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (elInput.current.value !== "") {
      fetch("https://restcountries.com/v3.1/name/" + elInput.current.value)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setCountry({
              isLoading: false,
              data: data,
            });
          }
        })
        .catch((err) => {
          setCountry({
            isLoading: false,
            data: [],
            isError: err.message,
          });
        });
    } else {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setCountry({
              ...country,
              isLoading: false,
              data: data,
            });
          }
        })
        .catch((err) => {
          if (err) {
            setCountry({
              ...country,
              isLoading: false,
              data: [],
              isError: err.message,
            });
          }
        });
    }
  };
  const handleChange = () => {
    fetch("https://restcountries.com/v3.1/region/" + elSelect.current.value)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCountry({
            isLoading: false,
            data: data,
          });
        }
      })
      .catch((err) => {
        if (err) {
          setCountry({
            ...country,
            isLoading: false,
            data: [],
            isError: err.message,
          });
        }
      });
  };

  return (
    <>
      <Header />
      <section>
        <form onSubmit={handleSubmit} className="all">
          <input
            ref={elInput}
            className="search-input"
            typeof="search"
            placeholder="Search"
          />
          <select
            ref={elSelect}
            onChange={handleChange}
            className="select-country"
          >
            <option value="asia">Asia</option>
            <option value="americas">Americas</option>
            <option value="europe">Europe</option>
            <option value="africa">Africa</option>
            <option value="oceania">Oceania</option>
          </select>
        </form>
      </section>
      <div className=" container">
        {country.isLoading ? <h1><img style={{
          position:"absolute",
          top:"0px",
          bottom:"0px",
          right:"0px",
          left:"0px",
          margin:"0 auto",
          width:"200px",
          height:"200px"
        }} src={Loading} alt="load"/></h1> : ""}
        {country.isError ? <h1>{country.isError}</h1> : ""}
        {country.data.length ? (
          <ul className="row  gap-5 justify-content-center mt-4 list-unstyled ">
            {country.data.map((item) => {
              return <Card obj={item} />;
            })}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
