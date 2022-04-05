import React from 'react';
import style from 'nav/Nav.module.scss';

export const Nav = () => (
  <div className={style.nav}>
    <a href={'#main'}>Main</a>
    <a href={'#skills'}>Skills</a>
    <a href={'#projects'}>Projects</a>
    <a href={'#footer'}>Contacts</a>
  </div>
);
