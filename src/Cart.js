import React,{Component} from "react";

class Cart extends Component{
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th><a href="">Back to Store</a></th>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Cart;
