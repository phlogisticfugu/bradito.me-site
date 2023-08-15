import React from 'react';
import { Link } from 'gatsby';
import '../assets/sass/main.scss';

const Header = () => {
  const currentPathname = window?.location?.pathname || "";
  return (
  <header id="header">
    <nav>
      <ul>
        <li>
          <Link to="/" className={"/" === currentPathname ? "active": ""}>Main</Link>
        </li>
        <li>
          <Link to="/blog/" className={currentPathname.startsWith("/blog/") ? "active": ""}>Blog</Link>
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;
