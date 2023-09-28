import NavbarLink from './navbar-link.component';

import classes from './navbar.styles.module.css';

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul className={classes['navbar_link-list']}>
                    <NavbarLink>Program Details</NavbarLink>
                    <NavbarLink isActive={true}>Application Form</NavbarLink>
                    <NavbarLink>Workflow</NavbarLink>
                    <NavbarLink>Preview</NavbarLink>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
