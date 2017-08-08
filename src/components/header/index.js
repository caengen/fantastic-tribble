import React from 'react';
import { Link } from 'react-router-dom';
import Constrainer from '../constrainer';
import './header.css';

const Header = (props) => (
  <header className="main-header">
    <Constrainer tighter={true}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Constrainer>
  </header>
);

export default Header;