import React, { Component } from 'react'
import style from './boxRow.module.css'

class BoxRow extends Component{
    arr;
    render(){
        // console.log(this.props.mark);
        return(
            <button className={style.row} value={this.props.ind} onClick={(e)=>this.props.handler(e)}>
                {this.props.val}
            </button>
        )
    }
}

export default BoxRow;