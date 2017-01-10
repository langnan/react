/**
 * Created by hasee on 2016/12/29.
 */

import "../less/common.less"

import "../iconfont/iconfont.css"
import React,{Component} from "react"
import {Link} from "react-router"


class Header extends Component {
    constructor(props) {
        super(props)
    }
    render () {

        return <div className="header">
            <ul className="header-list">
                <li className="header-btn">
                    {this.props.hasBack?<a href="javascript:;" onClick={()=>window.history.go(-1)}>{"<"}</a>:""}

                </li>
                <li className="header-tit">{this.props.title}</li>
                <li className="header-btn">
                    {this.props.rightBtn||(this.props.hasSearch?<a>搜索</a>:"")}
                </li>
            </ul>
        </div>
    }
}

Header.defaultProps={
    hasBack:true
};


class Footer extends Component {
    constructor(props) {
        super(props)
    }
    Panduan(){
        let id = window.sessionStorage.getItem("userID")||window.localStorage.getItem("userID");
    }

    render () {
        return <div className="footer">
            <ul className="footer-list iconfont">
                {
                    this.props.footerData.map((ele,i)=><li key={i}>
                        <Link to={ele.path} className={i==this.props.active?"active":""+" footerIcon"}><i className="icon-footer">{ele.icon}</i><span >{ele.text}</span></Link>
                    </li>)
                }
            </ul>
        </div>
    }
}
Footer.defaultProps={
    /*footerData:["首页","列表","购物车","我的","更多"]*/
    footerData:[
            {text:"首页",icon:"\ue623","path":"/"},
            {text:"分类",icon:"\ue61f","path":"/list"},
            {text:"购物车",icon:"\ue622","path":"/cart"},
            {text:"我的秀",icon:"\ue61d","path":"/order-list"},
            {text:"更多",icon:"\ue61e","path":"/user-center"}
    ]
};






class Content extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let contentStyle = {
            "overflowY":this.props.hasIScroll?"hidden":"auto"
        };
        let contentClass = "content"
            +(this.props.hasFooter?" has-footer":"")
            +(this.props.hasSubHeader?" has-sub-header":"");

        //this.props.hasIScroll  如果需要iscroll就必须引入iscroll的结构

        return <div className={contentClass} style={contentStyle}>
            {this.props.hasIScroll?
                <div className="scroll-wrap" ref="scrollWrap">
                    <div className="scroller">
                        {this.props.children}
                    </div>
                </div>:this.props.children}
        </div>
    }
    componentDidMount() {

        //react-iscroll 插件

        //组件渲染完成以后，获取scroll-wrap，创建iscroll
        //如果需要iscroll再创建
        this.props.hasIScroll && (this.myScroll = new IScroll(this.refs.scrollWrap))
        //console.log(this.refs.scrollWrap)
       // console.log(this.myScroll)

    }
    componentDidUpdate() {
        //组件更新的时候，也更新iscroll
        this.props.hasIScroll && this.myScroll.refresh()
    }
}



class SubHeader extends Component {
    constructor (props){
        super(props)
    }
    render () {
        return (
            <div className="sub-header">{this.props.children}</div>
        )
    }

}




export { Header,Footer,Content,SubHeader}