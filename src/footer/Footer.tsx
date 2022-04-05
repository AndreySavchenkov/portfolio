import React from 'react';
import containerStyle from '../common/styles/Container.module.scss';
import style from './Footer.module.scss';
import instagramIcon from './../assets/social-icon/instagram.png';
import linkedInIcon from './../assets/social-icon/linkedin.png';
import githubIcon from './../assets/social-icon/github.png';
import codewarsIcon from './../assets/social-icon/code.png';
import telegramIcon from './../assets/social-icon/telegram.png';
import { Zoom } from 'react-awesome-reveal';

export const Footer = () => (
  <Zoom duration={3000}>
    <div id={'footer'} className={style.footer}>
      <div className={`${containerStyle.container} ${style.container}`}>
        {/*<h3 className={style.title}>Andrey Savchenkov</h3>*/}
        <div className={style.items}>
          <a className={style.item} target="_blank"
             href="https://www.instagram.com/savchenkov_andrey1/">
            <img className={style.icon} src={instagramIcon} alt="instagram" />
          </a>
          <a className={style.item} target="_blank"
             href="https://www.linkedin.com/in/andrey-savchenkov/">
            <img className={style.icon} src={linkedInIcon} alt="linkedin" />
          </a>
          <a className={style.item} target="_blank" href="https://github.com/AndreySavchenkov">
            <img className={style.icon} src={githubIcon} alt="github" />
          </a>
          <a className={style.item} target="_blank" href="https://www.codewars.com/users/sandvik16">
            <img className={style.icon} src={codewarsIcon} alt="code wars" />
          </a>
          <a className={style.item} target="_blank" href="https://t.me/sannndvik16">
            <img className={style.icon} src={telegramIcon} alt="telegram" />
          </a>
        </div>
        <span>2022Ⓒ All rights reserved</span>
      </div>
    </div>
  </Zoom>
);
