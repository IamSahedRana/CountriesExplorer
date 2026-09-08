import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';
import type { Country } from './type';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/all')
      .then((response) => response.json())
      .then((data) => {
        console.log('API DATA:', data);

        setCountries(data.countries);
        setLoading(false);
      })
      .catch((error) => {
        console.error('ERROR:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>World On the Go.....</h2>

      <Countries countries={countries} />
    </>
  );
}

export default App;