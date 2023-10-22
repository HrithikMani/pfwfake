import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Login">About</Link>
      <Link to="/Register">Contact</Link>
    </nav>
  );
}

export default NavBar;