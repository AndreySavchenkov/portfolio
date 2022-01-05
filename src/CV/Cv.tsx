import React from "react";
import style from './Cv.module.scss';



export const Cv = () => {



    return(
        <div className={style.cvContainer}>

            <a href={"https://drive.google.com/file/d/1G6j8WAjWTV3WireJP0QOX-7T2WKuVnUh/view?usp=sharing"} target={'_blank'} download={'AndrewCV.pdf'}>Download My CV</a>
        </div>
    )
}