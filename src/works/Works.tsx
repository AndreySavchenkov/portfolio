import React from "react";
import style from "works/Works.module.scss"
import {Work} from "works/work/Work";
import styleContainer from 'common/styles/Container.module.scss'
import {Title} from "common/components/Title/Title";
import todoImage from 'assets/image/toDoList.jpg'
import socialImage from 'assets/image/socialNetwork.jpg'
import yesNo from 'assets/image/yes-no.jpg'
import counter from 'assets/image/counter.jpg'
import newsApp from 'assets/image/newsApp.jpg'
import table from 'assets/image/table.jpg'
import trello from 'assets/image/trello.jpg';
import prayer from 'assets/image/prayer.jpg'
import accelerist from 'assets/image/accelerist.jpg'
import {Slide} from "react-awesome-reveal";

export const Works = () => {

    const todoListBackground = {backgroundImage: `url(${todoImage})`,}
    const socialBackground = {backgroundImage: `url(${socialImage})`,}
    const yesNoMaybeBackground = {backgroundImage: `url(${yesNo}`,}
    const counterBackground = {backgroundImage: `url(${counter}`,}
    const newsBackground = {backgroundImage: `url(${newsApp}`,}
    const tableBackground = {backgroundImage: `url(${table}`,}
    const trelloBackground = {backgroundImage: `url(${trello}`,}
    const prayerBackground = {backgroundImage: `url(${prayer}`,}
    const acceleristBackground = {backgroundImage: `url(${accelerist}`,}

    return (
        <Slide duration={2000}>
            <div id='projects' className={style.works}>
                <div className={`${styleContainer.container} ${style.container}`}>
                    <Title text={'Projects'}/>
                    <div className={style.worksContainer}>
                        <Work link={'https://andreysavchenkov.github.io/accelerist/'}
                              linkCode={'https://github.com/AndreySavchenkov/accelerist'}
                              style={acceleristBackground}
                              title={'Accelerist'}
                              text={'React, TypeScript, Redux-Toolkit, Redux-Saga, Redux-persist, React Router Dom, React Final Form, Styled Components'}/>
                        <Work link={'https://www.youtube.com/watch?v=L2DFIVYFUcM'}
                              linkCode={'https://github.com/AndreySavchenkov/Prayer'}
                              style={prayerBackground}
                              title={'PrayerX'}
                              text={'React-Native, TypeScript, Redux-Toolkit, Redux-Saga, Redux-persist, React Navigation'}/>
                        <Work link={'https://andreysavchenkov.github.io/trello/'}
                              linkCode={'https://github.com/AndreySavchenkov/trello'}
                              style={trelloBackground}
                              title={'Custom Trello'}
                              text={'React, TypeScript, Redux-Toolkit, Styled Components, Redux-persist'}/>
                        <Work link={'https://andreysavchenkov.github.io/Social-Network/'}
                              linkCode={'https://github.com/AndreySavchenkov/Social-Network'}
                              style={socialBackground}
                              title={'Social Network (IN PROGRESS)'}
                              text={'HTML, SCSS, React, TypeScript, Redux, Axios, REST API, Formik'}/>
                        <Work link={'https://andreysavchenkov.github.io/ToDoMain/'}
                              linkCode={'https://github.com/AndreySavchenkov/ToDoMain'}
                              style={todoListBackground}
                              title={'ToDo List'}
                              text={'HTML, SCSS, React, TypeScript, Redux, Axios, REST API, MaterialUI, Formik'}/>
                        <Work link={'https://andreysavchenkov.github.io/YesNoMaybe/'}
                              linkCode={'https://github.com/AndreySavchenkov/YesNoMaybe'}
                              style={yesNoMaybeBackground}
                              title={'Yes-No-Maybe ;)'}
                              text={'HTML, MaterialUI, React, TypeScript, Axios, REST API'}/>
                        <Work link={'https://andreysavchenkov.github.io/test_app_deploy/'}
                              linkCode={'https://github.com/AndreySavchenkov/test_app_deploy'}
                              style={counterBackground}
                              title={'Counter'}
                              text={'HTML, CSS, React, TypeScript'}/>
                        <Work link={'https://andreysavchenkov.github.io/news/'}
                              linkCode={'https://github.com/AndreySavchenkov/news'}
                              style={newsBackground}
                              title={'News App'}
                              text={'React, Redux, TypeScript, RouterDom, SCSS, Formik '}/>
                        <Work link={'https://andreysavchenkov.github.io/table/'}
                              linkCode={'https://github.com/AndreySavchenkov/table'}
                              style={tableBackground}
                              title={'Custom Table'}
                              text={'React, Redux, TypeScript, SCSS'}/>
                    </div>
                </div>
            </div>
        </Slide>

    )
}