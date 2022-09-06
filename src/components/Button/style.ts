import styled from 'styled-components';

function clickVerifier(props: boolean) {
    if(props === true) {
        return "#490707"
    } else {
        return "#4E4E4E"
    }
}

export const Wrapper = styled.button `
    width: auto;
    height: 1.8rem;
    border-radius: 8px;
    background-color: ${props => clickVerifier(props.theme)};
    color: #ebebeb;
    font-weight: bold;
    border: none;
    padding: 0 1rem;
    text-transform: uppercase;
    margin: 0 1rem 0 0;
    transition: .5s;
    &:hover{
        cursor: pointer;
    }
`;