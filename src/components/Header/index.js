import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Logo = styled(Link)`  
  font-family: Lato;
  font-size: 3rem;
  letter-spacing: 1rem;
  font-weight: 400;
  font-style: normal;
  display: inline-block;
  color: #111;
  text-decoration: none;
`;

export default () => {
  return (
    <LogoContainer>
      <Logo to="/">
        VICKASE
      </Logo>
    </LogoContainer>
  )
}
