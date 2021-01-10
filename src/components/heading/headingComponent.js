import React,{Component} from 'react'
import style from './headingComponent.module.css'

class Heading extends Component{
    render(){
        return(
            <div className={style.heading}>
                {this.props.children}
            </div>
        )
    }
}

export default Heading;