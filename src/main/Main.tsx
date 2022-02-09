import React from "react";
import style from './Main.module.scss'
import styleContainer from 'common/styles/Container.module.scss'
import myPhoto from "assets/image/myPhoto.jpg";
import {Slide} from "react-awesome-reveal";


export const Main = () => {

    const backgroundPhoto = {
        backgroundImage: `url(${myPhoto})`,
    }

    return (
<Slide duration={2000}>
    <div id="main" className={style.mainBlock}>
        <div className={`${styleContainer.container} ${style.container}`}>
            <div className={style.text}>
                <span>Hi There!</span>
                <h1>I'm Andrey Savchenkov</h1>
                <p>Front-End Developer</p>
            </div>
            <div className={style.photo} style={backgroundPhoto}>

            </div>
        </div>
    </div>
</Slide>


            )
            }