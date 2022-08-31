import React from 'react';
import { Wrapper } from 'components/Button/style';
// import { ReactComponent as Logo } from 'assets/mascotinho.svg';

interface Props {
    children: React.ReactNode
}


export default function Button({ children }: Props) {
    return(
        <Wrapper> {children} </Wrapper>
    )
}
