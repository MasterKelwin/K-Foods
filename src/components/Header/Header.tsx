import React from 'react';
import Wrapper from './style';
import Logo from 'assets/logo.png';

export default function Header() {
  return(
      <Wrapper>
        <img src={Logo} alt="K-PIZZA, no lugar do A, uma pizza sorridente e fofinha" />
      </Wrapper>
  )
}
