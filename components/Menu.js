import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import navObjects from '../navObjects'
import MenuDropdown from './MenuDropdown'

// TODO: send menu items as props from somewhere else
const Menu = ({ hoveredItem, onMouseOver }) => (
    <nav id="menu" className="navbar navbar-default navbar-static-top">
      <ul className="nav navbar-nav">
        {
            navObjects.map((obj, index) =>
            <li onMouseOver={() => onMouseOver(index)} className="nav_menu__item" key={index}>
                <NavLink to={'/' + obj.name}>{obj.value}</NavLink>{hoveredItem === index && <obj.component />}
            </li>)
        }
      </ul>
    </nav>
  )

export default Menu;
