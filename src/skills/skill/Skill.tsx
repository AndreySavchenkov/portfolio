import React, { FC } from 'react';
import style from './Skill.module.scss';

export type Props = {
  title: string
  description: string
  iconPath: string
  iconAlt: string
}

export const Skill: FC<Props> = ({
  title,
  description,
  iconPath,
  iconAlt
}) => (
  <div className={style.skill}>
    <img className={style.icon} src={iconPath} alt={iconAlt} />
    <h3 className={style.title}>{title}</h3>
    <span className={style.description}>{description}</span>
  </div>
);
