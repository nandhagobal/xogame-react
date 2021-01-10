import React, { Component } from 'react'
import style from './playBase.module.css'
import Box from '../boxRow/boxRow'
import Backdrop from '../../backdrop/backdrop';

class PlayBase extends Component{
    state={
        mark:new Array(9).fill(null),
        change:0,
        win:null
    }
    componentDidUpdate(){
        let arr=[...this.state.mark];
        let full=false;
        full=arr.includes(null);
        console.log(full);
        let a,b,c;
        console.log('updating');
        if(full==false && !this.state.win){
            this.setState({
                win:'draw'
            })
        }
        // console.log(this.state.mark[0])
        if(!this.state.win){
        for(var i=0;i<9;i=i+3){
            console.log('inside function')
            a=this.state.mark[i];
            b=this.state.mark[i+1];
            c=this.state.mark[i+2];
            // console.log('row'+a+' '+b+' '+c);
            if(a===b&&b===c&&a&&b&&c){
                this.setState({
                    win:a
                })
                return;
            }
        }
        for(var i=0;i<3;i++){
            a=this.state.mark[i];
            b=this.state.mark[i+3];
            c=this.state.mark[i+6];
            console.log('col'+a+' '+b+' '+c);
            if(a===b&&b===c&&a&&b&&c){
                this.setState({
                    win:a
                })
                return;
            }
        }
        for(var i=0;i<9;i=i+6){
            if(i==6){
            a=this.state.mark[i];
            b=this.state.mark[i-2];
            c=this.state.mark[i-4];
            }
            else{
            a=this.state.mark[i];
            b=this.state.mark[i+4];
            c=this.state.mark[i+8];
            }
            console.log("diagonal"+a+' '+b+' '+c);
            if(a===b&&b===c&&a&&b&&c){
                this.setState({
                    win:a
                })
                return;
            }
        }
    }
    }
    valueChangeHandler=(e)=>{
        let newArray=[...this.state.mark];
        if(newArray[e.target.value]==null)
            newArray[e.target.value]=this.state.change?'O':'X';
        // console.log(newArray);
        else
            return
        this.setState({
            mark:newArray,
            change:!this.state.change
        })
    }

    resetHandler=()=>{
        this.setState({
            mark:new Array(9).fill(null),
            win:null,
            change:0
        })
    }
    
    render(){
        // console.log(this.state.mark);
        return(
            <React.Fragment>
                <div className={style.info}>
                Next Choice : <span> {this.state.change?"O":'X'}</span>
                </div>
            <div className={style.base}>
                 <div className={style.outer}>
                    <Box val={this.state.mark[0]} ind={0} handler={this.valueChangeHandler}></Box>
                    <Box val={this.state.mark[1]} ind={1} handler={this.valueChangeHandler}></Box>
                    <Box val={this.state.mark[2]} ind={2} handler={this.valueChangeHandler}></Box>
                 </div>
                 <div className={style.outer}>
                    <Box val={this.state.mark[3]} ind={3} handler={this.valueChangeHandler}></Box>
                    <Box val={this.state.mark[4]} ind={4} handler={this.valueChangeHandler}></Box>
                    <Box val={this.state.mark[5]} ind={5} handler={this.valueChangeHandler}></Box>
                 </div><div className={style.outer}>
                    <Box val={this.state.mark[6]} ind={6} handler={this.valueChangeHandler}></Box>
                    <Box val={this.state.mark[7]} ind={7} handler={this.valueChangeHandler}></Box>
                    <Box val={this.state.mark[8]} ind={8} handler={this.valueChangeHandler}></Box>
                 </div>
            </div>
            {this.state.win?<Backdrop resetHandler={this.resetHandler}><div>{this.state.win} won the match</div></Backdrop>:null}
            <button className={style.button} onClick={this.resetHandler}>New Game</button>
            </React.Fragment>
        )
    }
}

export default PlayBase;