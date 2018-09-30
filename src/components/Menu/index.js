import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MenuItem = styled(NavLink)`
  margin: 0 1rem;
  text-decoration: none;
  color: #9c9c9c;
  font-size: 0.9rem;
  &.active {
    color: #111;
  }
  &:hover {
    color: #111;
  }
`;

class MenuComponent extends Component {
  render() {
    return (
      <MenuWrapper>
        <Menu>
          <MenuItem to="/" exact>PORTFOLIO</MenuItem>
          <MenuItem to="/about" exact>ABOUT</MenuItem>
        </Menu>
      </MenuWrapper>
    )
  }
}

export default MenuComponent;
