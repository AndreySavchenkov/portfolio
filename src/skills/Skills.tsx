import React from "react";
import styleContainer from './../common/styles/Container.module.css';
import style from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title/Title";
import reactIcon from './../assets/skill-icon/react-seeklogo.com.svg'
import typescriptIcon from './../assets/skill-icon/typescript-seeklogo.com.svg'
import javascriptIcon from './../assets/skill-icon/javascript-js-seeklogo.com.svg'
import scssIcon from './../assets/skill-icon/sass-seeklogo.com.svg'

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'React'}
                           iconPath={reactIcon}
                           iconAlt={'icon for React'}
                           description={'A JavaScript library for building user interfaces'}/>
                    <Skill title={'Typescript'}
                           iconPath={typescriptIcon}
                           iconAlt={'icon for Typescript'}
                           description={'TypeScript is a strongly typed programming language that builds on JavaScript.'}/>
                    <Skill title={'JavaScript'}
                           iconPath={javascriptIcon}
                           iconAlt={'icon for Javascript'}
                           description={'Multiparadigm programming language.'}/>
                    <Skill title={'SCSS'}
                           iconPath={scssIcon}
                           iconAlt={'icon for SCSS'}
                           description={'Syntactically Awesome Stylesheet'}/>
                </div>
            </div>
        </div>
    )
}