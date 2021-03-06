import { Link } from 'gatsby';
import React, { useState } from 'react';
import KG from '../svgs/knowgraphs-logo.inline.svg';

const links = [
  { url: '/', text: 'RAKI' },
  { url: '/news/', text: 'News' },
  { url: '/team/', text: 'Team' },
  { url: '/partners/', text: 'Partner' },
  { url: '/publications/', text: 'Publikationen' },
  { url: '/deliverables/', text: 'Arbeitsergebnisse' },
];

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item no-opacity">
          <KG className="dice-nav-logo" />
          RAKI
        </Link>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
          onClick={() => setExpanded(!expanded)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div
        id="navbarMenu"
        className={`navbar-menu ${expanded ? 'is-active' : ''}`}
      >
        <div className="navbar-start">
          {links.map(l => (
            <Link
              key={l.url}
              to={l.url}
              className="navbar-item"
              activeClassName="is-active"
              partiallyActive={l.url !== '/'}
            >
              {l.text}
            </Link>
          ))}
        </div>

        <div className="navbar-end">
          <div className="navbar-item no-opacity">
            <Link to="/contact/" className="button">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
