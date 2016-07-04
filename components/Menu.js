import React, { PropTypes } from 'react'
import { Link } from 'react-router'

// TODO: send menu items as props from somewhere else
const Menu = () => (
    <nav id="menu" className="navbar navbar-default navbar-static-top">
      <ul className="nav navbar-nav">
        <li className="nav_menu__item"><Link to="/products">Products</Link></li>
        <li className="nav_menu__item"><Link to="/lab">Design Lab</Link></li>
        <li className="nav_menu__item"><Link to="/templates">Templates</Link></li>
        <li className="nav_menu__item"><Link to="/sponsorship">Sponsorship</Link></li>
        <li className="nav_menu__item"><Link to="/fundraising">Fundraising</Link></li>
        <li className="nav_menu__item"><Link to="/about">About</Link></li>
        <li className="nav_menu__item"><Link to="/account">Account</Link></li>
      </ul>
    </nav>
  )

export default Menu;
