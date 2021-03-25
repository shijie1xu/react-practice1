import React,{Component} from "react";

class Cart extends Component{
    constructor(props) {
        super(props);
        this.state={
            showCart: this.props.showCart
        }
    }
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th><a href="#0" onClick={() => this.props.parentCallback(!this.state.showCart)}>Back to Store</a></th>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Cart;
