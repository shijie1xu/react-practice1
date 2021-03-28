import React, {Component} from 'react';

import Cart from "./Cart";




class Items extends Component{


    constructor(props) {
        super(props);
        this.state ={
            showCart:false,
            cartNumber:0,
            appleNum: 0,
            grapeNum: 0,
            pineappleNum: 0,
            totalPrice:0
        }

    }



    addOneCart(){
        this.setState({cartNumber: this.state.cartNumber +1})
    }

    addOneApple(){
        this.setState(
            {
                appleNum: this.state.appleNum+1,
                totalPrice: this.state.totalPrice+12
        })
    }
    addOneGrape(){
        this.setState({
            grapeNum: this.state.grapeNum+1,
            totalPrice: this.state.totalPrice+11
        })
    }

    addOnePineapple(){
        this.setState({
            pineappleNum: this.state.pineappleNum+1,
            totalPrice: this.state.totalPrice+8
        })
    }

    callbackFunction = (childData) =>{
        this.setState({showCart: childData})
    }

    setCart = (cartNumber) =>{
        this.setState({cartNumber: cartNumber})
    }

    setApple = (appleNumber) =>{
        this.setState({appleNum: appleNumber})
    }

    setGrape = (grapeNumber) =>{
        this.setState({grapeNum: grapeNumber})
    }

    setPineapple = (pineappleNumber) =>{
        this.setState({pineappleNum: pineappleNumber})
    }

    setPrice = (price) =>{
        this.setState({totalPrice: price})
    }

    render() {

        return (
            <div>
                {!this.state.showCart && <div className="item">
                    <input type="text" placeholder="Search"/>
                    <br/>
                    <span>Cart:{this.state.cartNumber} Total Price:${this.state.totalPrice}</span>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th><a href="#0" onClick={() => this.setState({showCart: !this.state.showCart})}>My Cart</a></th>
                        </tr>
                        <tr>
                            <td><a href="#0">Apple</a></td>
                            <td>Eat one everyday, may keep the doctor away</td>
                            <td>$12</td>
                            <td><button onClick={()=>{this.addOneCart(); this.addOneApple()}}>Add to cart</button></td>
                        </tr>
                        <tr>
                            <td><a href="#0">Grape</a></td>
                            <td>Wine is great, but grape is even better</td>
                            <td>$11</td>
                            <td><button onClick={()=>{this.addOneCart();this.addOneGrape()}}>Add to cart</button></td>
                        </tr>
                        <tr>
                            <td><a href="#0">Pineapple</a></td>
                            <td>Enjoy but don't forget to peer first</td>
                            <td>$8</td>
                            <td><button onClick={()=>{this.addOneCart();this.addOnePineapple()}}>Add to cart</button></td>
                        </tr>
                    </table>
                </div>}

                <div className="cart">
                    {this.state.showCart &&
                    <Cart showCart = {this.state.showCart}
                          cartNumber = {this.state.cartNumber}
                          appleNum = {this.state.appleNum}
                          grapeNum = {this.state.grapeNum}
                          pineappleNum = {this.state.pineappleNum}
                          totalPrice = {this.state.totalPrice}
                          parentCallback = {this.callbackFunction}
                          setCart = {this.setCart}
                          setApple = {this.setApple}
                          setGrape = {this.setGrape}
                          setPineapple = {this.setPineapple}
                          setPrice = {this.setPrice}
                    />
                    }
                </div>

            </div>
        );
    }
}

export default Items;
