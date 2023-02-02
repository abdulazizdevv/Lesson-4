import Header from "./Components/Header";
// import { Card } from "./Components/Card";
import { Hero } from "./Components/Hero/Hero";
import { SingleUser } from "./Components/SingleUser/SingleUser";
import "./Components/Header.scss";
import "./Components/Country.scss";
import "./Components/Card.scss";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Loading from "./assets/images/Spinner.svg";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

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
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((data) => {
        if (data) {
          setCountry({
            ...country,
            isLoading: false,
            data: data.data,
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
      axios
        .get("https://restcountries.com/v3.1/name/" + elInput.current.value)
        .then((data) => {
          if (data) {
            setCountry({
              isLoading: false,
              data: data.data,
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
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((data) => {
          if (data) {
            setCountry({
              ...country,
              isLoading: false,
              data: data.data,
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
    axios
      .get("https://restcountries.com/v3.1/region/" + elSelect.current.value)
      .then((data) => {
        if (data) {
          setCountry({
            isLoading: false,
            data: data.data,
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
    <div className={`sections ${theme} `}>
      <div>
        <Header />
        <section>
          <form onSubmit={handleSubmit} className="all px-5">
            <input
              ref={elInput}
              className={`search-input ${theme} `}
              typeof="search"
              placeholder="Search"
            />
            <select
              ref={elSelect}
              onChange={handleChange}
              className={`select-country p-2 ${theme}`}
            >
              <option value="asia">Asia</option>
              <option value="americas">Americas</option>
              <option value="europe">Europe</option>
              <option value="africa">Africa</option>
              <option value="oceania">Oceania</option>
            </select>
          </form>
        </section>
        <div>
          {country.isLoading ? (
            <h1>
              <img
                style={{
                  position: "absolute",
                  top: "0px",
                  bottom: "0px",
                  right: "0px",
                  left: "0px",
                  margin: "auto",
                  width: "400px",
                  height: "400px",
                }}
                src={Loading}
                alt="load"
              />
            </h1>
          ) : (
            ""
          )}

          {country.isError ? (
            <h1 className="text-center mt-5">{country.isError}</h1>
          ) : (
            ""
          )}

          <Routes>
            <Route
              path="/"
              element={<Hero country={country} setCountry={setCountry} />}
            />
            <Route path="/name/:name" element={<SingleUser />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
