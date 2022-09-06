import styled from 'styled-components';

export const Wrapper = styled.button `
    width: auto;
    height: 1.8rem;
    border-radius: 8px;
    background-color: ${props => props.onClick ? "red" : "white"};
    color: #ebebeb;
    font-weight: bold;
    border: none;
    padding: 0 1rem;
    text-transform: uppercase;
    margin: 0 1rem 0 0;
    &:hover{
        cursor: pointer;
    }
`;