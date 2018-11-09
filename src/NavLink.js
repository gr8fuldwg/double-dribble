import React from 'react';
import PropTypes from 'prop-types';

function NavLink(props) {
    return (
      <li className="nav-item">
        <a className="nav-link" href={props.href="#"}>{props.title}</a>
      </li>
    );
  }

NavLink.propTypes = {
    href: PropTypes.string.isRequired
}

export default NavLink;