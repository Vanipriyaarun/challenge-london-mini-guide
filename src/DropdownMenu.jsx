import React from 'react';
let cities=["Harrow","Heathrow","Stratford"];
function DropdownMenu() {
  return (
    <div className='dropdownMenu'>
      <label for="city-select">Choose a City:</label>
      <select name="cities" id="city">
        <option value="city">Select a City</option>
        {cities.map((city,index)=>(
            <option key={index} value={city}>{city}</option>
        ))} 
      </select>
    </div>
  )
}

export default DropdownMenu;
