
import React,{Component} from 'react'
import {Header,Footer,Content} from  "../components/common"
import '../iconfont/iconfont.css'
import  "../less/common.less"
import  "../less/index.less"


import oPic1 from "../images/banner1.jpg"
import oPic2 from "../images/banner2.jpg"
import oPic3 from "../images/banner3.jpg"
import oPic4 from "../images/banner4.jpg"
import oPic5 from "../images/banner5.jpg"
import oPic6 from "../images/banner6.jpg"
import oPic7 from "../images/banner-second1.jpg"
import oPic8 from "../images/banner-second2.jpg"
import oPic9 from "../images/banner-second3.jpg"
import oPic10 from "../images/banner-second4.jpg"
import oPic11 from "../images/banner-second5.jpg"
import oPic12 from "../images/banner-second6.jpg"
import oPic13 from "../images/banner-second7.jpg"

class Icon extends Component {
    constructor(props){
        super(props),
            this.state={
                icon:['\ue626','\ue8d0','\ue625','\ue627','\ue629','\ue628',' \ue63a','\ue640','\ue771','\ue648'],
                text:['京东超市','全球购','服装城','京东生鲜','京东到家','充值中心','惠赚钱','领券','物流查询','我的关注'],
                lastTime:""
            }
    }
    showTime(){
        this.timer = setInterval(()=>{
            var timeStart = new Date().getTime()
            var timeEnd =  new Date("2017/02/01 00:00:00").getTime()
            var timeDistance = timeEnd - timeStart;
            // console.log(timeDistance)

            //天
            var intDay = Math.floor(timeDistance/86400000)
            timeDistance -= intDay * 86400000;
            // 时
            var intHour = Math.floor(timeDistance/3600000)
            timeDistance -= intHour * 3600000;
            // 分
            var intMinute = Math.floor(timeDistance/60000)
            timeDistance -= intMinute * 60000;
            // 秒
            var intSecond = Math.floor(timeDistance/1000)
            // 时分秒为单数时、前面加零
            if(intDay < 10){
                intDay = "0" + intDay;
            }
            if(intHour < 10){
                intHour = "0" + intHour;
            }
            if(intMinute < 10){
                intMinute = "0" + intMinute;
            }
            if(intSecond < 10){
                intSecond = "0" + intSecond;
            }
            this.setState({
                intHour:intHour,
                intMinute:intMinute,
                intSecond:intSecond
            })
        },1000)



    }
    render(){
        return (
            <div>
                <div className="index-icon">
                    <ul>
                        {
                            this.state.icon.map((ele,index)=>
                                <li key={index}><p className="iconfont icon-iconfont">{ele}</p><p className="icon-text">{this.state.text[index]}</p></li>
                            )
                        }
                    </ul>
                </div>
                <div className="index-new">
                    <li>
                        <p>
                            <span>京东</span><b>快报</b>：<em>热 </em>格力表彰大会，满减最高可达
                        </p>
                        <a>| 更多</a>
                    </li>
                </div>
                <div className="wrap-second">
                    <div className="second-top">
                        <p>
                            <b>京东秒杀</b>
                            <i>22点场</i>
                            <span className="lastTime">
                                <em>{this.state.intHour}</em>
                                <em>{this.state.intMinute}</em>
                                <em>{this.state.intSecond}</em>
                            </span>
                            <a>秒杀好货迎新 ></a>
                        </p>
                    </div>
                    <div >
                        <div id="wrap2"  className="swiper-container">
                            <div className="swiper-wrapper">
                                <dl className="swiper-slide">
                                    <dt><img src={oPic7} alt=""/></dt>
                                    <dd><b>￥45</b><br/><del>￥69</del></dd>
                                </dl>
                                <dl className="swiper-slide">
                                    <dt><img src={oPic8} alt=""/></dt>
                                    <dd><b>￥919</b><br/><del>￥998</del></dd>
                                </dl>
                                <dl className="swiper-slide">
                                    <dt><img src={oPic9} alt=""/></dt>
                                    <dd><b>￥220</b><br/><del>￥288</del></dd>
                                </dl>
                                <dl className="swiper-slide">
                                    <dt><img src={oPic10} alt=""/></dt>
                                    <dd><b>￥205</b><br/><del>￥350</del></dd>
                                </dl>
                                <dl className="swiper-slide">
                                    <dt><img src={oPic11} alt=""/></dt>
                                    <dd><b>￥99</b><br/><del>￥168</del></dd>
                                </dl>
                                <dl className="swiper-slide">
                                    <dt><img src={oPic12} alt=""/></dt>
                                    <dd><b>￥79</b><br/><del>￥125</del></dd>
                                </dl>
                                <dl className="swiper-slide">
                                    <dt><img src={oPic13} alt=""/></dt>
                                    <dd><b>￥125</b><br/><del>￥178</del></dd>
                                </dl>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
    componentWillMount(){
        this.showTime()
    }
}


//获取商品数据
class  ProductList extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul className="product-list product-list-img">
                {
                    this.props.productData.map((ele,i)=><li key={i}>
                        <img src={ele.goodsListImg}/>
                        <p>{ele.goodsName}</p>
                    </li>)
                }
            </ul>
        )
    }

}
ProductList.defaultProps={
    productData:[]
}



class ClassList extends Component　{
    constructor(props){
        super(props),
            this.state={
                productData:[]
            }
        this.classID = undefined;
        this.linenumber = 10;
        this.pageCode = 0;
        this.refresh = false;
        $.get("http://datainfo.duapp.com/shopdata/getclass.php",(data)=>{
            if(typeof data === 'string'){
                data = JSON.parse(data)
            }
            this.setState({
                classData:data
            })
            // console.log(data)
        },"json");
        this.getProductData(this.pageCode)
        $.getJSON("http://datainfo.duapp.com/shopdata/getBanner.php?callback=?",(data)=>{
            if(typeof data === 'string'){
                data = JSON.parse(data)
            }
            this.setState({
                productData:data
            })
            console.log(this.state.productData);
        },"json");

    }

    componentDidMount(){
        this.swiper=new Swiper(".wrap1 .swiper-container",{
            pagination:'.swiper-pagination',
            slidesPerView:'1',
            loop:true,
            autoplay: 1000
        })
        this.swiper1=new Swiper("#wrap2",{

            slidesPerView:'4',
            loop:true,
            autoplay: 1000

        })

    }


    handleClick(id){
        console.log(id);
        this.props.changeClassID(id);
    }

    getProductData(){
        $.getJSON('http://datainfo.duapp.com/shopdata/getGoods.php?callback=?',{
            "classID":this.classID,
            "linenumber":this.linenumber,
            "pageCode":this.pageCode
        },(data)=>{
            if(data){
                this.setState({
                    productData:this.pageCode==0?data:this.state.productData.concat(data)
                })
            }
            console.log(data)

        })
    }

    render (){
        return (
            <div className="page" id="index-page">
               <Header title="首页" hasSearch={true}/>
                <Content hasFooter={true}>
                    <div className="wrap1">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src={oPic1} alt=""/>
                                </div>
                                <div className="swiper-slide">
                                    <img src={oPic2} alt=""/>
                                </div>
                                <div className="swiper-slide">
                                    <img src={oPic3} alt=""/>
                                </div>
                                <div className="swiper-slide">
                                    <img src={oPic4} alt=""/>
                                </div>
                                <div className="swiper-slide">
                                    <img src={oPic5} alt=""/>
                                </div>
                                <div className="swiper-slide">
                                    <img src={oPic6} alt=""/>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                    <Icon/>
                    <ProductList productData = {this.state.productData}/>
                </Content>
                <Footer active={0}/>
            </div>
        )
    }

}
export  default  ClassList

if (module.hot) {
    module.hot.accept();
}