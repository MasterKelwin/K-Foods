import React from 'react';
import { Wrapper } from 'components/Button/style';
// import { ReactComponent as Logo } from 'assets/mascotinho.svg';

interface Props {
    onClick?: () => void | undefined,
    theme: boolean,
    children: React.ReactNode
}


export default function Button({ onClick, theme, children }: Props) {    
    return(
        <Wrapper onClick={onClick} theme={theme} >{children} </Wrapper>
    )
}