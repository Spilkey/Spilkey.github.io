import React from 'react';

import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from '@fotawesome/react-fontawesome';

function Nav() {
  return (
    <nav>
      <ul>
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
