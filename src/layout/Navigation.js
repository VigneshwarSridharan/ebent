import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Navbar, Collapse } from 'reactstrap';

const menuList = [
    { path: '#/home', name: 'Home' },
    { path: '#/products', name: 'Products' },
    { path: '#/portfolio', name: 'Portfolio' },
    { path: '#/recycle', name: 'Recycle' },
    { path: '#/cart-check-out', name: 'Cart/Check Out' },
    { path: '#/news', name: 'News' },
    { path: '#/contact-us', name: 'Contact Us' },
]

const Navigation = () => {
    let [active, setActive] = useState(0);
    let [isOpen, setIsOpen] = useState(false);

    let toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar expand="md" className="ebent-navbar p-0">
            <div className="ebent-navbar-toggle" onClick={toggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar className="m-auto">
                    {menuList.map((menu, inx) => {
                        let { path, name } = menu;
                        let className = `nav-link  ${inx === active ? 'active' : ''}`;
                        return (
                            <NavItem key={'navbar-menu-' + inx}>
                                <NavLink
                                    className={className}
                                    href={path}
                                    onClick={(e) => { e.preventDefault(); setActive(inx) }}
                                >{name}</NavLink>
                            </NavItem>
                        )
                    })}
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Navigation;