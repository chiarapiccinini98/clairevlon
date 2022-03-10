import React, { useState } from "react";
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand} from "reactstrap";
import { NavLink as RouterLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
    const {logo, navItems} =props;

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const itemsList = navItems.map((item) => {
        return (
            <NavItem className={style.navItem} key={item.url}>
                <RouterLink
                    exact={item.exact}
                    to={item.url}
                    className={isActive => `nav-link ${isActive ? style.active : ""}` }
                >
                    {item.text}
                </RouterLink>
            </NavItem>
        );
    });

    return (
        <div className={style.navBar}>
            <Navbar expand="md" full light>

                        <RouterLink  to="/">
                            <img className={"ms-md-4"} src={logo} alt="/"/>
                        </RouterLink>
                    <NavbarToggler onClick={toggle} />
                        <Collapse className={""} isOpen={isOpen} navbar>
                            <Nav
                                className="ms-auto"
                                navbar
                            >
                                {itemsList}
                            </Nav>
                        </Collapse>

            </Navbar>
        </div>
    );
};

export default Header;

