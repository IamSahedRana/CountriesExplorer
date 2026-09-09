import type { Country as CountryType } from '../../type';
import Country from '../Country/Country';
import './Countries.css';

export interface CountriesProps {
  countries: CountryType[];
  visitedCountries: CountryType[];
  handleVisitedCountry: (country: CountryType) => void;
}

export default function Countries({
  countries,
  visitedCountries,
  handleVisitedCountry,
}: CountriesProps) {

  return (
    <div>
      <div className="section-heading">
        <div>
          <p className="section-label">EXPLORE THE WORLD</p>
          <h2>All Countries</h2>
        </div>

        <p className="country-count">
          {countries.length} countries to explore
        </p>
      </div>

      <div className="visited-section">
        <h3>Visited Countries: {visitedCountries.length}</h3>

        <ul>
          {visitedCountries.map((country) => (
            <li key={country.ccn3.ccn3}>
              {country.name.common}
            </li>
          ))}
        </ul>
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          />
        ))}
      </div>
    </div>
  );
}