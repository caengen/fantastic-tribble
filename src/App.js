import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Header from './components/header';
import Footer from './components/footer';

const App = () => (
  <div className="App">
    <Header />
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </main>
    <Footer />
  </div>
);

export default App;