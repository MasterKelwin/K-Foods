import React from 'react';
import { ImgBanner } from './style';
import  Header  from '../components/Header/Header';



export default function App() {
    return(
        <>
            <Header />
            <ImgBanner>
                <p>Dia da Pizza são todos os dias!</p>
            </ImgBanner>
        </>
    )
}

//Error: Process completed with exit code 1.