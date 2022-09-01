import styled from 'styled-components';

export const Wrapper = styled.div `
    width: 100%;
    max-width: 300px;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    background-color: #4e4e4e; 
    align-items: center;
    border-radius: 8px;

    input {
        background: none;
        width: 80%;
        border: none;
        outline: none;
        color: #fff;
        font-weight: regular;
    }

    @media (max-width: 500px) {
        max-width: none;
    }
`;