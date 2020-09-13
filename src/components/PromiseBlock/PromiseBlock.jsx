import React from 'react'
import style from './PromiseBlock.module.css'
import tick from '../../images/tick.svg'
import question from '../../images/question.svg'

const PromiseBlock = () => {
    return (
        <div className={style.container}>
            <div className={style.main}>

            <h1 className={style.title}>что обещали</h1>
            <div className={style.list}>
                <div className={style.line}>
                    <div className={style.circle} />
                    <p className={style.text}>защищать права и интересы студентов</p>
                </div>
                <div className={style.line}>
                    <div className={style.circle} />
                    <p className={style.text}>выделять <span className={style.black}>материальную помощь</span></p>
                </div>
            </div>
            <h2 className={style.title}>А ЧТО УЖЕ СДЕЛАЛИ</h2>
            <div className={style.list}>
                <div className={style.line}>
                    <img src={tick} alt="tick" className={style.tick} />
                    <p className={style.text}>открыли <span className={style.black}>Горячую линию</span> для пострадавших</p>
                </div>
                <div className={style.line}>
                    <img src={tick} alt="tick" className={style.tick} />
                    <p className={style.text}>оказывают материальную помощь пострадавшим</p>
                </div>
            </div>
            </div>
            <img src={question} alt="question" className={style.question} />
        </div>
    )
}

export default PromiseBlock