import { useState } from 'react';
import { useEffect } from 'react';
import Country from './../Country/Country';

const Countries = () => {
   const [countries, setCountries] = useState([]);
   useEffect(() => {
      fetch('https://restcountries.eu/rest/v2/all')
         .then(res => res.json())
         .then(data => setCountries(data))
   }, [])

   return (
      <div className="container">
         <div className="row">
            {
               countries.map(country => <Country key={country.alpha3Code} country={country}></Country>)
            }
         </div>
      </div>
   );
};

export default Countries;