import React from "react";
import commonStyle from './../../../common/styles/Container.module.css';
import style from './Title.module.scss';

type TitleType = {
    text: string
}

export const Title = (props: TitleType) => {
    return (
        <div className={style.title}>
            <h2>{props.text}</h2>
        </div>
    )
}