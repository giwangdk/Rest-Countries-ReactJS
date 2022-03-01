import React from 'react';
import './App.css';
import {
  Button, CardCountry, DropDown, Navbar, Search,
} from './components';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Button>Hai</Button>
      <Search />
      <DropDown />
      <CardCountry />
      <Home />
    </div>
  );
}

export default App;
