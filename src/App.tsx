import React from 'react';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {Footer} from "./footer/Footer";
import {Cv} from "./CV/Cv";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Cv/>
            <Footer/>
        </div>
    );
}

export default App;
