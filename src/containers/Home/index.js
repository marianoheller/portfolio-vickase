import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import Menu from '../../components/Menu';


const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  padding-top: 2rem;
`;

const MenuWrapper = styled.div`
  padding-top: 1rem;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
    </HomeWrapper>
  )
}

export default Home;
