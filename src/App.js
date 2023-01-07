import './App.css';
import React from 'react';
import DropdownMenu from './DropdownMenu';
import CatagoryButton from './CatagoryButton';
function App() {
  return (
    <div className="App">
     <h1>City Mini Guide</h1>
     <DropdownMenu/>
     <CatagoryButton/>
    </div>
  );
}

export default App;

