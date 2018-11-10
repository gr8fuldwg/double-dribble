import React from 'react';
import PropTypes from 'prop-types';

function NavLink(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.href}>
                {props.children}
            </a>
        </li>
    );
}

NavLink.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.element)  
    ]).isRequired,
    href: PropTypes.string.isRequired
}

export default NavLink;

