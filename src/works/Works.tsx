import React from "react";
import style from './Works.module.scss'
import {Work} from "./work/Work";
import styleContainer from './../common/styles/Container.module.css'
import {Title} from "../common/components/Title/Title";
import todoImage from './../assets/image/toDoList.jpg'
import socialImage from './../assets/image/socialNetwork.jpg'
import yesNo from './../assets/image/yes-no.jpg'

export const Works = () => {

    const todoListBackground = {
        backgroundImage: `url(${todoImage})`,
    }

    const socialBackground = {
        backgroundImage: `url(${socialImage})`,
    }

    const yesNoMaybeBackground = {
        backgroundImage: `url(${yesNo}`,
    }

    return (
        <div className={style.works}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={'Projects'}/>
                <div className={style.worksContainer}>
                    <Work link={'https://andreysavchenkov.github.io/Social-Network/'}
                          style={socialBackground}
                          title={'Social Network'}
                          text={'HTML, SCSS, React, TypeScript, Redux, Axios, REST API, Formik'}/>
                    <Work link={'https://andreysavchenkov.github.io/ToDoMain/'}
                          style={todoListBackground}
                          title={'ToDo List'}
                          text={'HTML, SCSS, React, TypeScript, Redux, Axios, REST API, MaterialUI, Formik'}/>
                    <Work link={'https://andreysavchenkov.github.io/YesNoMaybe/'}
                          style={yesNoMaybeBackground}
                          title={'Yes-No-Maybe ;)'}
                          text={'HTML, MaterialUI, React, TypeScript, Axios, REST API'}/>
                </div>
            </div>
        </div>
    )
}