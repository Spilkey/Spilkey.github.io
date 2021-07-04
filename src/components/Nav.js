import React from 'react';

import { Link } from "react-router-dom";

import '../styles/Nav.css';

import ToggleStyle from './ToggleStyle';

function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <ToggleStyle/>
        </li>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
