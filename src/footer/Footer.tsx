import React from "react";
import containerStyle from './../common/styles/Container.module.css';
import style from './Footer.module.scss';
import insta from './../assets/social-icon/instagram.png'
import linka from './../assets/social-icon/linkedin.png'
import github from './../assets/social-icon/github.png'
import codewars from './../assets/social-icon/code.png'
import telega from './../assets/social-icon/telegram.png'

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${containerStyle.container} ${style.container}`}>
                <h3 className={style.title}>Andrey Savchenkov</h3>
                <div className={style.items}>
                    <a className={style.item} target='_blank' href='https://www.instagram.com/savchenkov_andrey1/'>
                        <img className={style.icon} src={insta} alt="instagram"/>
                    </a>
                    <a className={style.item} target='_blank' href='https://www.linkedin.com/in/andrey-savchenkov/'>
                        <img className={style.icon} src={linka} alt="linkedin"/>
                    </a>
                    <a className={style.item} target='_blank' href='https://github.com/AndreySavchenkov'>
                        <img className={style.icon} src={github} alt="github"/>
                    </a>
                    <a className={style.item} target='_blank' href='https://www.codewars.com/users/sandvik16'>
                        <img className={style.icon} src={codewars} alt="code wars"/>
                    </a>
                    <a className={style.item} target='_blank' href='https://t.me/sannndvik16'>
                        <img className={style.icon} src={telega} alt="telegram"/>
                    </a>
                </div>
                <span>2021(c)Все права защищены</span>
            </div>
        </div>
    )
}