import { Link } from 'gatsby';
import React from 'react';
import Social from '../social';
import DICE from '../svgs/dice.inline.svg';
import UPB from '../svgs/upb.inline.svg';

const links = [
  { url: '/team/', text: 'Team' },
  { url: '/publications/', text: 'Publications' },
  { url: '/news/', text: 'News' },
  { url: '/partners/', text: 'Partners' },
  { url: '/contact/', text: 'Contact' },
  { url: '/imprint', text: 'Imprint' },
  { url: '/privacy', text: 'Privacy Policy' },
];

const Footer = () => (
  <div className="footer">
    <div className="columns" style={{ flex: 1 }}>
      <div className="column is-flex">
        <DICE className="dice-nav-logo" />
      </div>
      <div className="column dice-footer">
        {links.map(l => (
          <Link key={l.url} to={l.url}>
            {l.text}
          </Link>
        ))}
      </div>
      <Social hiddenMobile={false} />
    </div>

    <div className="horizontal-separator" />

    <div className="is-flex horizontally-centered">
      <a href="https://www.uni-paderborn.de/">
        <UPB
          style={{ filter: 'grayscale(1) invert(1) opacity(0.5)', width: 200 }}
        />
      </a>
    </div>
  </div>
);

export default Footer;
