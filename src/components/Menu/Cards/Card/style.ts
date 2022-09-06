import styled from 'styled-components';
import Vegetariana from 'assets/flavors/vegetariana.jpg'

export const Wrapper = styled.div`
    border-radius: 16px;
    width: 80%;
    height: 160px;
    background-color: #d3d1d1;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
    margin: 0 0 1rem 0;
    transition: .5s ease-in-out;
    position: absolute;
    left: 10%;
    &:hover {
        width: 82%;
        position: absolute;
        left: 9%;
        
    }
    
`

    export const DivImgPizza = styled.div`
    border-radius: 16px;
    width: 160px;
    height: 160px;
    background-image: url(${Vegetariana});
    background-size: cover;
`


    export const DivInfo = styled.div`
    width: auto;
    margin: 1rem;

    h1 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 8px;
    }

    ul {
        display: flex;
        margin-top: 1.5rem;
        margin-left: .5rem;

        li {
            margin-right: 1rem;
            background-color: none;
            font-weight: bold;
            padding: .5rem;
            border-radius: 8px;
            border: solid 2px;
            transition: .5s ease-in-out;
            &:hover{
                background-color: #490707;
                border: solid 2px #ebebeb;
                color: #ebebeb;
                cursor: pointer;
                text-transform: uppercase;
            }
        }
    }
`