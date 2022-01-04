import React from 'react';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {Footer} from "./footer/Footer";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Footer/>
        </div>
    );
}

export default App;
