import styled from 'styled-components';

export const Wrapper = styled.ul `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 1rem;

    li {
        margin: 0 .2rem 1rem 0;

    }

    @media (max-width: 500px) {
        margin-top: .5rem;

        li {
            margin-bottom: .5rem;
        }
    }
`