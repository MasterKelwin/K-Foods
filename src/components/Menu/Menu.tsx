import React, { useState } from 'react';
import { Wrapper } from './style';
import Finder from './Finder/Finder';
import Filters from 'components/Filters/filters';

export default function Menu() {
  const [search, setSearch] = useState<string>("");
  return(
      <Wrapper>
        <div>
          <h1>Cardápio</h1>
          <Finder search={search} setSearch={setSearch} />
          <Filters />
        </div>
      </Wrapper>
  )
}

