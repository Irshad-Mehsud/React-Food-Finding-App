import React, { useState } from 'react';
import './Header.css';
import Allitems from './Allitems'; // Make sure the path is correct

const Header = () => {
  const [inputval, setInputval] = useState(""); // Initialize state for input value

  // Handle the change in input field
  const handleInputChange = (e) => {
    setInputval(e.target.value); // Update the state with input value
  };

  return (
    <div>
      <div className="header">
        <h1>Find Your Best Food!</h1>
        <div id="search-div">
          <label>Search:</label>
          <input 
            type="text" 
            placeholder="Search For Your Favorite Food" 
            onChange={handleInputChange} // Update inputval on change
            value={inputval} // Controlled input
          />
        </div>
      </div>
      <div className="container">
        {/* Pass inputval to Allitems component as a prop */}
        <Allitems inputval={inputval} />
      </div>
    </div>
  );
}

export default Header;
