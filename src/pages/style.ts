import styled from 'styled-components';
import Banner from 'assets/banner.jpg';

export const ImgBanner = styled.div`
    width: 100%;
    height: 228px;
    background-image: url(${Banner});
    background-position: 0% 90%;
    background-size: cover;
    background-repeat: no-repeat;
    font-size: 5rem;
    font-weight: bold;
    color: #ebebeb;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: grayscale(0.2);
    transition: .2s ease-in-out;

    &:hover {
        filter: grayscale(0);
    }

    
    p {
        text-shadow: 5px 5px 5px #000000cc;
    }

    @media (max-width: 500px) {
        height: 128px;
        background-position: 0% 50%;
        font-size: 2rem;
        flex-wrap: wrap;
        text-align: center;
        
        p{
            text-shadow: 3px 3px 5px #000000;
        }
    }
`

export const Main = styled.main`
    width:80%;
    margin: 0 auto;
`