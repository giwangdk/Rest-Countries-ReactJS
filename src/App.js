import React from 'react';
import './App.css';
import {
  Button, CardCountry, Navbar, Search,
} from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Button>Hai</Button>
      <Search />
      <CardCountry />
    </div>
  );
}

export default App;
