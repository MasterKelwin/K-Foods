import React from 'react';
import { Wrapper } from './style';
import { CgSearch } from 'react-icons/cg';

interface Props {
  
}

export default function Finder() {
  return(
      <Wrapper>
        <input />
        <CgSearch  size={24} color="#fff" />
      </Wrapper>
  )
}

