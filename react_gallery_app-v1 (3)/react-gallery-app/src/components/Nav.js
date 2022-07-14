import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom';

class Nav extends Component {
  state = {
    button: ''
  }

  handleClick= (e) => {
    this.props.onClick(e.target.textContent.toLowerCase());

    this.setState({
      button: e.target.textContent.toLowerCase()
    });
  
  }

  render () {
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/fries" onClick={this.handleClick}>Fries</NavLink>
          </li>
          <li>
            <NavLink to="/iguanas" onClick={this.handleClick}>Iguanas</NavLink>
          </li>
          <li>
            <NavLink to="/beaches" onClick={this.handleClick}>Beaches</NavLink>
          </li>
        </ul>
      </nav>
    );

  }
  
};

export default withRouter(Nav);