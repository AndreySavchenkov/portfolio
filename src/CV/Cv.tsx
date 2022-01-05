import React from "react";
import style from './Cv.module.scss';



export const Cv = () => {



    return(
        <div className={style.cvContainer}>

            <a href={"./../../public/AndrewCV.pdf"} target={'_blank'} download={'AndrewCV.pdf'}>Download My CV</a>
        </div>
    )
}