import React from 'react';
import {
  BrowserRouter, NavLink, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Quote from './components/FetchQuote';

export default function App() {
  const activeClassName = 'nav-active';
  return (
    <BrowserRouter>

      <header>
        <h1>Math Magicians</h1>
        <nav>
          <NavLink to="/" className={({ isActive }) => (isActive ? activeClassName : undefined)}>Home </NavLink>
          <li>| </li>
          <NavLink to="calculator" className={({ isActive }) => (isActive ? activeClassName : undefined)}> Calculator</NavLink>
          <li>| </li>
          <NavLink to="quote" className={({ isActive }) => (isActive ? activeClassName : undefined)}>Quote</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>

  );
}
