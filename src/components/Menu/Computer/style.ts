import styled from 'styled-components';

export const Wrapper = styled.button<{ open: boolean }>`
    border: none;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: relative;
    min-width: 156px;
    background-color: ${props => props.open === true ? "#490707" : "#4E4E4E"};
    color: #EBEBEB;
    height: 30px;

    span {
        text-align: center;
    }


    &:hover {
        cursor: pointer;
    }

    @media (max-width: 500px) {
        padding: 0 2px;
        margin-top: .5rem;
    }
`

export const ComputersList = styled.div<{ open: boolean }>`
    display: ${props => props.open === true ? "flex" : "none"};
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    flex-direction: column;

    div:nth-child(1) {
        width: 100%;
        height: 20px;
        border-top: 2px solid #000;
    }

    div:nth-child(4) {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
`

export const EachComputer = styled.div<{ open: boolean }>`
    display: flex;
    heigth: 40px;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    width: inherit;
    color: ${props => props.open === true ? "#EBEBEB" : "#490707"};
    background-color: ${props => props.open === true ? "#4E4E4E" : "#EBEBEB"};

    &:hover{
        color: #EBEBEB;
        background-color: #490707;
    }
`