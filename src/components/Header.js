import React from 'react';
import { Link } from 'gatsby';
import '../assets/sass/main.scss';
const Header = () => (
  <header id="header">
    <Link className="title" to="/">
      Brad Ito
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
