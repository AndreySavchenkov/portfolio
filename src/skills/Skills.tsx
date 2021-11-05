import React from "react";
import styleContainer from './../common/styles/Container.module.css';
import style from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'React'}
                           description={'information about skill'}/>
                    <Skill title={'Typescript'}
                           description={'information about skill'}/>
                    <Skill title={'JavaScript'}
                           description={'information about skill'}/>
                    <Skill title={'HTML'}
                           description={'information about skill'}/>
                    <Skill title={'CSS'}
                           description={'information about skill'}/>
                </div>
            </div>
        </div>
    )
}