import { useContext, useState } from "react";
import ModeMoon from "../assets/images/modeMoon.png";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const [state, setState] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <header className={`header-bar ${theme}`}>
        <h1
          className="header"
          style={{ fontFamily: "Nunito Sans", fontWeight: "800" }}
        >
          Where in the world ?
        </h1>
        <button
          onClick={() => {
            setState(!state);
            setTheme(state ? "light" : "dark");
          }}
          className="mode me-4 "
        >
          <img className="moon" src={ModeMoon} alt="mode" />
          {/* <p > */}
          Dark Mode
          {/* </p> */}
        </button>
        {/* <select
          defaultValue={theme}
          onChange={(evt) => setTheme(evt.target.value)}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select> */}
      </header>
    </>
  );
};

export default Header;
