import styled from 'styled-components';

export const Wrapper = styled.footer`
    height: 4rem;
    background-color: #D3D1D1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    width: 100%;
    bottom: 0;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

    h1 {
        margin: 0 0 .5em 0;
        font-weight: bold;
    }

    a {
        margin: 0 1em;
    }

`;