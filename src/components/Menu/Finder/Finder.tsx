import React from 'react';
import { Wrapper } from './style';
import { CgSearch } from 'react-icons/cg';

interface Props {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<String>>
}

export default function Finder({search, setSearch} : Props) {
  return(
      <Wrapper>
        <input value={search} onChange={evento => setSearch(evento.target.value)} />
        <CgSearch  size={24} color="#fff" />
      </Wrapper>
  )
}

