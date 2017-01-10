/**
 * Created by hasee on 2017/1/3.
 */
import React, {Component} from  "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory} from "react-router"

import IndexPage from "./main/indexPage"
import ListPage from "./main/listPage"
import DetailPage from "./main/detailPage"
import CartPage from "./main/cartPage"
import ConfirmPage from "./main/confirmPage"
import LoginPage from "./main/loginPage"
import UserCenterPage from "./main/user-center-page"
import FootmarkPage from "./main/footmark-page"
import OrderListPage from "./main/order-list-page"
import RegisterPage from "./main/register-page"


ReactDOM.render(<Router history={hashHistory}>

    <Route path="/" component={IndexPage}  />
    <Route path="/list" component={ListPage}  />
    <Route path="/detail(/:goodsID)" component={DetailPage} />
    <Route path="/cart" component={CartPage} />
    <Route path="/confirm" component={ConfirmPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/user-center" component={UserCenterPage} />
    <Route path="/footmark" component={FootmarkPage} />
    <Route path="/order-list" component={OrderListPage} />
    <Route path="/register" component={RegisterPage} />

</Router>,document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}


