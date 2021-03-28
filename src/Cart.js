import React,{Component} from "react";

class Cart extends Component{
    constructor(props) {
        super(props);
        this.state={
            showCart: this.props.showCart,
            cartNumber: this.props.cartNumber,
            appleNum: this.props.appleNum,
            grapeNum: this.props.grapeNum,
            pineappleNum: this.props.pineappleNum,
            totalPrice: this.props.totalPrice
        }
        this.applePlusOne = this.applePlusOne.bind(this)
        this.appleMinusOne = this.appleMinusOne.bind(this)
        this.appleDelete = this.appleDelete.bind(this)
        this.grapePlusOne = this.grapePlusOne.bind(this)
        this.grapeMinusOne = this.grapeMinusOne.bind(this)
        this.grapeDelete = this.grapeDelete.bind(this)
        this.pineapplePlusOne = this.pineapplePlusOne.bind(this)
        this.pineappleMinusOne = this.pineappleMinusOne.bind(this)
        this.pineappleDelete = this.pineappleDelete.bind(this)

    }

    applePlusOne(){

        this.setState({
            appleNum: this.state.appleNum+1,
            cartNumber: this.state.cartNumber+1,
            totalPrice: this.state.totalPrice+12
        });
        this.props.setCart(this.state.cartNumber+1);
        this.props.setApple(this.state.appleNum+1);
        this.props.setPrice(this.state.totalPrice+12);

    }
    appleMinusOne(){
        this.setState({
            appleNum: this.state.appleNum-1,
            cartNumber: this.state.cartNumber-1,
            totalPrice: this.state.totalPrice-12
        });
        this.props.setCart(this.state.cartNumber-1);
        this.props.setApple(this.state.appleNum-1);
        this.props.setPrice(this.state.totalPrice-12);
    }
    appleDelete(){
        this.setState({
            cartNumber: this.state.cartNumber - this.state.appleNum,
            appleNum: 0,
            totalPrice: this.state.totalPrice - this.state.appleNum*12
        });
        this.props.setCart(this.state.cartNumber - this.state.appleNum);
        this.props.setApple(0);
        this.props.setPrice(this.state.totalPrice - this.state.appleNum*12);
    }
    grapePlusOne(){
        this.setState({
            grapeNum: this.state.grapeNum+1,
            cartNumber: this.state.cartNumber+1,
            totalPrice: this.state.totalPrice+11
        });
        this.props.setCart(this.state.cartNumber+1);
        this.props.setGrape(this.state.grapeNum+1);
        this.props.setPrice(this.state.totalPrice+11);
    }
    grapeMinusOne(){
        this.setState({
            grapeNum: this.state.grapeNum-1,
            cartNumber: this.state.cartNumber-1,
            totalPrice: this.state.totalPrice-11
        });
        this.props.setCart(this.state.cartNumber-1);
        this.props.setGrape(this.state.grapeNum-1);
        this.props.setPrice(this.state.totalPrice -11);
    }
    grapeDelete(){
        this.setState({
            cartNumber: this.state.cartNumber - this.state.grapeNum,
            grapeNum: 0,
            totalPrice: this.state.totalPrice - this.state.grapeNum*11
        });
        this.props.setCart(this.state.cartNumber - this.state.grapeNum);
        this.props.setGrape(0);
        this.props.setPrice(this.state.totalPrice - this.state.grapeNum*11);
    }
    pineapplePlusOne(){
        this.setState({
            pineappleNum: this.state.pineappleNum+1,
            cartNumber: this.state.cartNumber+1,
            totalPrice: this.state.totalPrice+8
        });
        this.props.setCart(this.state.cartNumber+1);
        this.props.setPineapple(this.state.pineappleNum+1);
        this.props.setPrice(this.state.totalPrice+8);
    }
    pineappleMinusOne(){
        this.setState({
            pineappleNum: this.state.pineappleNum-1,
            cartNumber: this.state.cartNumber-1,
            totalPrice: this.state.totalPrice-8
        });
        this.props.setCart(this.state.cartNumber-1);
        this.props.setPineapple(this.state.pineappleNum-1);
        this.props.setPrice(this.state.totalPrice-8);
    }
    pineappleDelete(){
        this.setState({
            cartNumber: this.state.cartNumber - this.state.pineappleNum,
            pineappleNum: 0,
            totalPrice: this.state.totalPrice - this.state.pineappleNum*8
        });
        this.props.setCart(this.state.cartNumber - this.state.pineappleNum);
        this.props.setPineapple(0);
        this.props.setPrice(this.state.totalPrice - this.state.pineappleNum*8);
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
                    <tr id="appleRow">
                        <td>Apple</td>
                        <td><button onClick={this.applePlusOne}>+</button>{this.state.appleNum}
                            {this.state.appleNum!=0 && <button onClick={this.appleMinusOne}>-</button>}</td>
                        <td>${this.state.appleNum*12}</td>
                        <td><button onClick={this.appleDelete}>x</button></td>
                    </tr>
                    <tr id="grapeRow">
                        <td>Grape</td>
                        <td><button onClick={this.grapePlusOne}>+</button>{this.state.grapeNum}
                            {this.state.grapeNum!=0 && <button onClick={this.grapeMinusOne}>-</button>}</td>
                        <td>${this.state.grapeNum*11}</td>
                        <td><button onClick={this.grapeDelete}>x</button></td>
                    </tr>
                    <tr id="pineappleRow">
                        <td>Pineapple</td>
                        <td><button onClick={this.pineapplePlusOne}>+</button>{this.state.pineappleNum}
                            {this.state.pineappleNum!=0 && <button onClick={this.pineappleMinusOne}>-</button>}</td>
                        <td>${this.state.pineappleNum*8}</td>
                        <td><button onClick={this.pineappleDelete}>x</button></td>
                    </tr>
                    <tr>
                        <td>total</td>
                        <td>{this.state.cartNumber}</td>
                        <td>${this.state.totalPrice}</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Cart;
