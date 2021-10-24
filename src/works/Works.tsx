import React from "react";
import style from './Works.module.css'
import {Work} from "./work/Work";
import styleContainer from './../common/styles/Container.module.css'
import {Title} from "../common/components/Title/Title";

export const Works = () => {
    return (
        <div className={style.works}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={'Projects'}/>
                <div className={style.worksContainer}>
                    <Work title={'Работа1'} text={'некое описиние первой работы'} link={'#'}/>
                    <Work title={'Работа2'} text={'некое описиние второй работы'} link={'#'}/>
                </div>
            </div>
        </div>
    )
}