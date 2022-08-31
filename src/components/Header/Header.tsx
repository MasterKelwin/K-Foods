import React from 'react';
import { Wrapper, Img } from './style';
import Logo from 'assets/logo.png';

interface Props {
  
}

export default function Header(/*{ }: Props*/) {
  return(
      <Wrapper>
        <Img src={Logo} alt="K-PIZZA, no lugar do A, uma pizza sorridente e fofinha" />
      </Wrapper>
  )
}
