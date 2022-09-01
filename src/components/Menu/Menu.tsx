import React from 'react';
import { Wrapper } from './style';
import Finder from './Finder/Finder';

interface Props {
  
}

export default function Menu() {
  return(
      <Wrapper>
        <div>
          <h1>Cardápio</h1>
          <Finder />
        </div>
      </Wrapper>
  )
}

