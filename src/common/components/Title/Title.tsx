import React, { FC } from 'react';
import style from './Title.module.scss';

type Props = {
  text: string
}

export const Title: FC<Props> = ({ text }) => {
  return (
    <div className={style.title}>
      <h2>{text}</h2>
    </div>
  );
};
