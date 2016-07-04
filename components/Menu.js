import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import navObjects from '../navObjects'

// TODO: send menu items as props from somewhere else
const Menu = ({ hoveredItem }) => (
    <nav id="menu" className="navbar navbar-default navbar-static-top">
      <ul className="nav navbar-nav">
        {
            navObjects.map((obj, index) => {
                <li className="nav_menu__item" key={index}><NavLink to={'/' + obj.name}>{obj.value}</NavLink></li>
            })
        }
      </ul>
      <MenuDropdown item={hoveredItem} />
    </nav>
  )

export default Menu;
