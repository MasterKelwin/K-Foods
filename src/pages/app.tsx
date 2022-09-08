import React from 'react';
import { ImgBanner, Main } from './style';
import  Header  from '../components/Header/Header';
import Menu from '../components/Menu/Menu';



export default function App() {
    return(
        <>
            <Header />
            <ImgBanner>
                <p>Dia da Pizza são todos os dias!</p>
            </ImgBanner>
            <Main>
                <Menu />
            </Main>
        </>
    )
}





//computer component
//state of computer
