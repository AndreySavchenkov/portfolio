import React from "react";
import style from './Works.module.scss'
import {Work} from "./work/Work";
import styleContainer from './../common/styles/Container.module.css'
import {Title} from "../common/components/Title/Title";
import todoImage from './../assets/image/toDoList.jpg'
import socialImage from './../assets/image/socialNetwork.jpg'

export const Works = () => {

    const todoList = {
        backgroundImage: `url(${todoImage})`,
    }

    const social = {
        backgroundImage: `url(${socialImage})`,
    }

    return (
        <div className={style.works}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={'Projects'}/>
                <div className={style.worksContainer}>
                    <Work style={social} title={'Social Network'} text={'some text about project'}/>
                    <Work style={todoList} title={'Todo List'} text={'some text about project'}/>
                </div>
            </div>
        </div>
    )
}