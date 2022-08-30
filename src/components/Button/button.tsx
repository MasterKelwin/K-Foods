import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button `
    background-color: red;
`;

interface Props {
    children: React.ReactNode
  }

export default function Button({ children }: Props) {
    return(
        <Wrapper> {children} </Wrapper>
    )
}