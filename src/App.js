import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import './App.css';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
);

export default App;