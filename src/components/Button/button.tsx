import React from 'react';
import { Wrapper } from 'components/Button/style';
// import { ReactComponent as Logo } from 'assets/mascotinho.svg';

interface Props {
    onClick?: () => void | undefined,
    active?: boolean,
    children: React.ReactNode
}


export default function Button({ onClick, active, children }: Props) {
    return(
        <Wrapper onClick={onClick}> {children} </Wrapper>
    )
}


/* interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children: React.ReactNode
  }

export default function Button({ onClick, type, children }: Props) {
    return(
        <button onClick={onClick} type={type} className={style.button}> {children} </button>
    )
} */