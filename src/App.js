import React from 'react';
import './App.css';
import {
  Button, CardCountry, DropDown, Navbar, Search,
} from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Button>Hai</Button>
      <Search />
      <DropDown />
      <CardCountry />
    </div>
  );
}

export default App;
