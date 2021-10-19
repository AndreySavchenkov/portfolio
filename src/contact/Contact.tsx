import React from "react";
import containerStyle from './../common/styles/Container.module.css';
import style from './Contact.module.css';

export const Contact = () => {
    return (
        <div className={style.contact}>
            <div className={`${containerStyle.container} ${style.container}`}>
                <h3 className={style.title}>Контакты</h3>
                <form action="" className={style.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </form>
                <button>Отправить</button>
            </div>
        </div>
    )
}