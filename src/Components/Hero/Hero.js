import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Card } from "../Card";

export const Hero = ({ country }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return country.data.length ? (
    <ul className={`d-flex  gap-5 justify-content-around p-3 sections flex-wrap mt-4 list-unstyled ${theme} `}>
      {country.data.map((item) => {
        return <Card obj={item} />;
      })}
    </ul>
  ) : (
    ""
  );
};
