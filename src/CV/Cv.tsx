import React from 'react';
import style from 'CV/Cv.module.scss';
import { JackInTheBox } from 'react-awesome-reveal';

export const Cv = () => (
  <JackInTheBox duration={4000}>
    <div className={style.cvContainer}>
      <a href={'https://drive.google.com/file/d/1tn8RSLT1Vimgqyuj0TF7xmqhiollN1Na/view?usp=sharing'}
         target={'_blank'} download={'AndrewCV.pdf'}>Download My CV</a>
    </div>
  </JackInTheBox>
);
