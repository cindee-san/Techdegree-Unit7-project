import React from "react";
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to='/search/fries' onClick={() => props.onClick('fries')}>Fries</NavLink>
        </li>
        <li>
          <NavLink to='/search/iguanas' onClick={() => props.onClick('iguana')}>Iguanas</NavLink>
        </li>
        <li>
          <NavLink to='/search/beaches' onClick={() => props.onClick('beaches')}>Beaches</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
