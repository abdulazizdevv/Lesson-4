import { Card } from "../Card";

export const Hero = ({ country, setCountry }) => {
  return country.data.length ? (
    <ul className="d-flex  gap-5 justify-content-around p-3 flex-wrap mt-4 list-unstyled ">
      {country.data.map((item) => {
        return <Card obj={item} />;
      })}
    </ul>
  ) : (
    ""
  );
};
