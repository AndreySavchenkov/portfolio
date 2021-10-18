import React from "react";
import style from './Works.module.css'
import {Work} from "./work/Work";
import styleContainer from './../common/styles/Container.module.css'

export const Works = () => {
    return (
        <div className={style.works}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3 className={style.title}>Мои работы</h3>
                <div className={style.worksContainer}>
                    <Work title={'Работа1'} text={'некое описиние первой работы'}/>
                    <Work title={'Работа2'} text={'некое описиние второй работы'}/>
                </div>
            </div>
        </div>
    )
}