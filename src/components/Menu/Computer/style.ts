import styled from 'styled-components';

export const Wrapper = styled.button`
    border: none;
    background-color: #ebebeb;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0 40px;
    position: relative;
    background-color: ${props => props.theme === true ? "#490707" : "#EBEBEB"};
    color: ${props => props.theme === true ? "#490707" : "EBEBEB"};

    &:hover {
        cursor: pointer;
    }
`

export const ComputersList = styled.div`
    display: ${props => props.theme === true ? "flex" : "none"};
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    flex-direction: column;

    div:nth-child(1) {
        border: none;
    }
`

export const EachComputer = styled.div`
    display: flex;
    heigth: 40px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-top: 2px solid #000;
    width: inherit;
    color: ${props => props.theme === true ? "#EBEBEB" : "490707"};
    background-color: ${props => props.theme === true ? "490707" : "EBEBEB"};

    &:hover{
        color: #EBEBEB;
        background-color: #490707;
    }
`


