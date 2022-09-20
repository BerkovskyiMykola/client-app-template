import React,{ useState }  from 'react';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { shallowEqual, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout } from '../actions/auth';

const NavMenu = () => {
    const { t, i18n } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();

    const { user } = useSelector(state => ({
        user: state.auth.user,
    }), shallowEqual)

    const logOut = (e) => {
        e.preventDefault();
        dispatch(logout());
    }

    return (
        <header>
            <Navbar
                color="dark"
                dark
                expand="md"
                light
            >
                <NavbarBrand tag={Link} to="/">ClientApp</NavbarBrand>
                <NavbarToggler onClick={() => setCollapsed(!collapsed)} />
                <Collapse isOpen={collapsed} navbar>
                    <Nav navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                {i18n.language.toUpperCase()}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => i18n.changeLanguage("ua")}>
                                    UA
                                </DropdownItem>
                                <DropdownItem onClick={() => i18n.changeLanguage("en")}>
                                    EN
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <Nav className="ms-auto" navbar>
                        {user ? (
                            <>
                                <NavItem>
                                    <NavLink tag={Link} to="/profile">{t("profile")}</NavLink>
                                </NavItem>
                                <li className="nav-item">
                                    <a href="/login" className="nav-link" onClick={logOut}>
                                        {t("logOut")}
                                    </a>
                                </li>
                            </>
                        ) : (
                            <>
                                <NavItem>
                                    <NavLink tag={Link} to="/login">{t("login")}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/register">{t("signUp")}</NavLink>
                                </NavItem>
                            </>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}

export default NavMenu;