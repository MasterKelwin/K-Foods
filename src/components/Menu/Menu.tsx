import React, { useState } from 'react';
import { Wrapper } from './style';
import Finder from './Finder/Finder';

interface Props {
  
}

export default function Menu() {
  const [search, setSearch] = useState<String>("");
  return(
      <Wrapper>
        <div>
          <h1>Cardápio</h1>
          <Finder search={search} setSearch={setSearch} />
        </div>
      </Wrapper>
  )
}

