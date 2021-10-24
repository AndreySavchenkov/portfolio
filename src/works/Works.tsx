import React from "react";
import style from './Works.module.css'
import {Work} from "./work/Work";
import styleContainer from './../common/styles/Container.module.css'

export const Works = () => {
    return (
        <div className={style.works}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.title}>
                    <h2>Projects</h2>
                </div>
                <div className={style.worksContainer}>
                    <Work title={'Работа1'} text={'некое описиние первой работы'} link={'#'}/>
                    <Work title={'Работа2'} text={'некое описиние второй работы'} link={'#'}/>
                </div>
            </div>
        </div>
    )
}