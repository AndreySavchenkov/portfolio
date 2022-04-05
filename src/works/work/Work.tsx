import React, { FC } from 'react';
import style from 'works/work/Work.module.scss';

export type Props = {
  title: string,
  text: string,
  style: {},
  link: string;
  linkCode: string;
}

export const Work: FC<Props> = ({
  title,
  text,
  link,
  linkCode,
  ...props
}) => (
  <div className={style.work}>
    <div className={style.image} style={props.style}>
      <a target="_blank" href={link} className={style.viewBtn}>Demo</a>
      <a target="_blank" href={linkCode} className={style.viewBtn}>Code</a>
    </div>
    <div className={style.textContainer}>
      <span className={style.projectTitle}>{title}</span>
      <p className={style.text}>Technology Stack:<span
        className={style.textTechnologies}>{text}</span></p>
    </div>
  </div>
);
