import './Country.css';
import type { Country as CountryType } from '../../type';

import { useState } from 'react';

export interface CountryProps {
  country: CountryType;
}

export default function Country({ country }: CountryProps) {

     const [visited, setVisited] = useState<boolean>(false);

     const handleVisited = () => {
        setVisited(!visited)
     }

  return (
    <div className= {`country ${visited ? 'country-visited' : ''}`}>


      <h3>{country.name.common}</h3>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
          <p>Official Name: {country.name.official}</p>
     <p>Country Code: {country.ccn3.ccn3}</p>
<p>Population: {country.population.population}</p>   
  <button onClick={handleVisited}>
            {visited ? 'Visited' : 'Mark as Visited'}
  </button>
   
    </div>
  );
}