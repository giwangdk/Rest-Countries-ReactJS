import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
// import { Navbar } from './components';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:slug" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
