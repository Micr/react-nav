import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import navObjects from '../navObjects'

// TODO: send menu items as props from somewhere else
const Menu = ({ hoveredItem, onMouseOver, onMouseOut, ...other }) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-static-top">
        <div id="navigation_container">
          <ul className="nav navbar-nav">
            {
              navObjects.map((obj, index) =>
              <li onMouseEnter={() => onMouseOver(index)} onMouseLeave={() => onMouseOut() } className="nav_menu__item" key={index}>
                      <NavLink to={'/' + obj.name}>{obj.value}</NavLink>
                  {
                      hoveredItem === index && <obj.component { ...other } className="menu_dropdown"/>
                  }
              </li>)
            }
          </ul>
        </div>
    </nav>
  )
}

export default Menu;
