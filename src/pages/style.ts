import styled from 'styled-components';
import Banner from 'assets/banner.jpg';

export const ImgBanner = styled.div `
    width: 100%;
    height: 228px;
    background-image: url(${Banner});
    background-position: 0% 90%;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 500px) {
        height: 188px;
        background-position: 0% 60%;
    }
`