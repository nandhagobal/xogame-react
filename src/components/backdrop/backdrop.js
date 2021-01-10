import React from 'react'
import style from './backdrop.module.css'

var Backdrop=(props)=>{
    return (
        <div className={style.backdrop}>
            {props.children}
            <div>
            <button className={style.button} onClick={props.resetHandler}>New Game</button>
            </div>
        </div>
    )
}

export default Backdrop;