import React from 'react';

import classes from './navbar-link.styles.module.css';

const NavbarLink: React.FC<React.PropsWithChildren<{ isActive?: boolean }>> = (props) => {
    const { isActive, children } = props;

    const navbarLinkClasses = `${classes['navbar__link']} ${isActive ? classes['navbar__link--active'] : ''}`;

    return (
        <li className={navbarLinkClasses}>
            <a href="#">{children}</a>
        </li>
    );
};

export default NavbarLink;
