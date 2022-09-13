import styled from 'styled-components';

export const Wrapper = styled.div`
    border-radius: 16px;
    width: 100%;
    height: 160px;
    background-color: #d3d1d1;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
    margin: 0 0 1rem 0;
    transition: .5s ease-in-out;
`

    export const DivImgPizza = styled.div`
    border-radius: 16px;
    width: 160px;
    height: 160px;
    overflow: hidden;

    img {
        height: 100%;
        border-radius: 16px;
    }
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
            }
        }
    }

    @media (max-width: 500px) {

        max-width: 60%;
        margin: 9px 6px 0px 6px;
        
        h1 {
            font-size: 1rem;
        }

        p {
            font-size: .8rem;
        }

        ul {
            display: flex;
            flex-wrap: wrap;
            margin-top: 5px;
            margin-left: 0;
    
            li {
                margin: 4px 4px 0 0;
                font-size: .8rem;
                padding: 5px;
                border: solid 1px;
            }
        }


    }
    
`

/*@media (max-width: 500px) {
    height: 128px;
    background-position: 0% 50%;
    font-size: 2rem;
    flex-wrap: wrap;
    text-align: center;
    
    p{
        text-shadow: 3px 3px 5px #000000;
    }
}*/