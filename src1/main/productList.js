import "../less/product-list.less"
import React,{Component} from "react"
import {Link} from "react-router"

/*写组件的时候，尽量 把组件名写完整，描述清晰*/
class  ProductList extends Component {
    constructor(props){
        super(props)
    }
    toDetail(ele){

        var footmarkData = JSON.parse(window.localStorage.getItem("footmarkData")||"[]");

        for(var i=0;i<footmarkData.length;i++){
            if(footmarkData[i].goodsID==ele.goodsID){
                footmarkData.splice(i,1);
                break
            }
        }
        footmarkData.unshift(ele);
        window.localStorage.setItem("footmarkData",JSON.stringify(footmarkData));

        window.location.hash = "#/detail/"+ele.goodsID;

        //JSON.stringify()

    }
    render(){

        return (

            <ul className="product-list">
                {

                    this.props.productData.map((ele,i)=><li key={i} onClick={()=>this.toDetail(ele)}>
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
};


export default ProductList