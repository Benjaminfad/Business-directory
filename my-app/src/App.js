import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BusinessList from './Components/BusinessList';
import SearchBar from './Components/SearchBar';
import Navbar from './Components/Navbar';
import "./App.css";

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('/data.json') // This assumes your mock API is served at the root.
      .then((response) => {
        setBusinesses(response.data.businesses);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const filteredBusinesses = businesses.filter(
    (business) =>
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.category.toLowerCase().includes(searchTerm.toLowerCase())
  ); 
 

  return (
    <div>
      <Navbar/>
      <div className='directory-container'>
      <h1>Business Directory</h1>
     <SearchBar onSearch={setSearchTerm} />
     {searchTerm && (
      <BusinessList businesses={filteredBusinesses} />
     )}
     {error && <p style={{ color:"black"}}>Error loading data from API.</p>}
     </div>
    </div>
  );
}

export default App;
