import React from "react";
import containerStyle from 'common/styles/Container.module.scss';
import style from 'contact/Contact.module.scss';
import {Title} from "common/components/Title/Title";



export const Contact = () => {


    return (
        <div className={style.contact}>
            <div className={`${containerStyle.container} ${style.container}`}>
                <Title text={'Contacts'}/>
                <form action="" className={style.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>
                <button type='submit'>Send</button>
            </div>
        </div>
    )
}