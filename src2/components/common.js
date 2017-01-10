/**
 * Created by Administrator on 2017/1/8.
 */
import "../less/common.less"
import "../iconfont/iconfont.css"
import React,{Component} from "react"
import {link} from "react-router"

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="header">
            <ul className="header-list">
                <li className="header-btn">
                    {this.props.hasBack?<a href="javascript:;" onClick={()=>window.history.go(-1)}>{"<"}</a>:""}
                </li>
                <li className="header-tit">{this.props.title}</li>
                <li className="header-btn"></li>
            </ul>
        </div>
    }
}