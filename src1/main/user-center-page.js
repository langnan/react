/**
 * Created by Administrator on 2017/1/7.
 */

import {Header,Content,Footer} from  "../components/common"
import  "../less/userCenterPage.less"
import React, {Component} from  "react"


class UserCenterPage extends  Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <div className="page" id="user-center-page">
                <Header title="个人中心" hasBack={false} />
                <Content hasFooter={true}>
                    <ul className="center-list">
                        <li><a  className="arrow-item" href="#/order-list">我的订单</a></li>
                        <li ><a  className="arrow-item" href="#/footmark">我的足迹</a></li>
                        <li ><a  className="arrow-item" href="#/order-list">我的收藏</a></li>
                        <li ><a  className="arrow-item" href="#/order-list">我的兴趣</a></li>
                    </ul>
                </Content>
                <Footer active={3} />

            </div>
        )
    }
}

export  default UserCenterPage