import React, { useState } from 'react';
import { Wrapper } from './style';
import Finder from './Finder/Finder';
import Filters from 'components/Menu/Filters/filters';
import Cards from './Cards/Cards';

export default function Menu() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string | null>(null);
  return(
      <Wrapper>
        <div>
          <h1>Cardápio</h1>
          <Finder search={search} setSearch={setSearch} />
          <Filters filter={filter} setFilter={setFilter}/>
        </div>
        <div>
          <Cards />
        </div>
      </Wrapper>
  )
}

