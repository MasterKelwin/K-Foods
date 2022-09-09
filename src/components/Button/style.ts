import styled from 'styled-components';

export const Wrapper = styled.button`
    width: auto;
    height: 1.8rem;
    border-radius: 8px;
    background-color: ${props => props.theme === true ? "#490707" : "#4E4E4E"}; 
    color: #ebebeb;
    border: none;
    padding: 0 1rem;
    text-transform: uppercase;
    margin: 0 0rem 0 0;
    transition: .5s;
    &:hover{
        cursor: pointer;
    }

`;

