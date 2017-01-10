/**
 * Created by Administrator on 2017/1/6.
 */

import React, {Component} from "react"
import "../less/order-list.less"

class OrderProductInfo extends Component {
    constructor(props){
        super(props)
    }
    render(){
        //this.props.productInfo
        var data = this.props.productInfo||[];
        console.log(data);
        return (
            <ul className="order-product-info">
                {
                    data.map((ele,i)=><li key={i}>
                        <img src={ele.goodsListImg}/>
                        <div className="text-info">
                            <p>{ele.goodsName} </p>
                        </div>
                        <div className="num-info">
                            <p><em>${ele.price}</em></p>
                            <p>*{ele.number}</p>
                        </div>
                    </li>)
                }
            </ul>
        )
    }
}

export {OrderProductInfo}

