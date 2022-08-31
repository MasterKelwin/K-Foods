import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button `
    font-family: 'Source Sans Pro', sans-serif;
    width: auto;
    height: 1.8rem;
    border-radius: 8px;
    background-color: #ebebeb;
    font-weight: bold;
    border: none;
    padding: 0 1rem;
    text-transform: uppercase;
    &:hover{
        cursor: pointer;
    }
`;

interface Props {
    children: React.ReactNode
  }

export default function Button({ children }: Props) {
    return(
        <Wrapper> {children} </Wrapper>
    )
}

