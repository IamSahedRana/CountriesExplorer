import type { Country as CountryType } from '../../type';
import Country from '../Country/Country';
import './Countries.css';

export interface CountriesProps {
  countries: CountryType[];
}

export default function Countries({ countries }: CountriesProps) {
  console.log('Countries component:', countries);

  return (
    <div>
      <h3>Countries:</h3>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
          />
        ))}
      </div>
    </div>
  );
}