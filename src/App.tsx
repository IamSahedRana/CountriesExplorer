import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';
import type { Country } from './type';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [visitedCountries, setVisitedCountries] = useState<Country[]>([]);
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

  const handleVisitedCountry = (country: Country): void => {
    const exists = visitedCountries.find(
      (c) => c.ccn3.ccn3 === country.ccn3.ccn3
    );

    if (exists) {
      const remainingCountries = visitedCountries.filter(
        (c) => c.ccn3.ccn3 !== country.ccn3.ccn3
      );

      setVisitedCountries(remainingCountries);
    } else {
      const newVisitedCountries = [...visitedCountries, country];

      setVisitedCountries(newVisitedCountries);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <header className="hero">
        <div className="hero-content">

          <div className="hero-top">
            <span className="logo">🌍 World On The Go</span>
            <span className="tracker-label">TRAVEL TRACKER</span>
          </div>

          <div className="hero-main">
            <div>
              <p className="eyebrow">YOUR JOURNEY STARTS HERE</p>

              <h1>
                Explore the world.
                <br />
                Track your journey.
              </h1>

              <p className="hero-description">
                Discover countries around the world and mark the
                places you've visited.
              </p>
            </div>

            <div className="stats">
              <div className="stat-box">
                <strong>{countries.length}</strong>
                <span>Countries</span>
              </div>

              <div className="stat-box">
                <strong>{visitedCountries.length}</strong>
                <span>Visited</span>
              </div>
            </div>
          </div>

        </div>
      </header>

      <main className="main-content">
        <Countries
          countries={countries}
          visitedCountries={visitedCountries}
          handleVisitedCountry={handleVisitedCountry}
        />
      </main>
    </>
  );
}

export default App;