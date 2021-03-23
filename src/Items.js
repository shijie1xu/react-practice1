import React, {Component} from 'react';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Cart from "./Cart";
import {Link} from "react-router-dom";


class Items extends Component{
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/Cart" component={Cart}/>
                    </Switch>


                </Router>

                <input type="text" placeholder="Search"/>
                <br/>
                <span>Cart:0 Total Price:$0</span>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th><a href="/Cart">My Cart</a></th>
                    </tr>
                    <tr>
                        <td><a href="">Apple</a></td>
                        <td>Eat one everyday, may keep the doctor away</td>
                        <td>$12</td>
                        <td><button>Add to cart</button></td>
                    </tr>
                    <tr>
                        <td><a href="">Grape</a></td>
                        <td>Wine is great, but grape is even better</td>
                        <td>$11</td>
                        <td><button>Add to cart</button></td>
                    </tr>
                    <tr>
                        <td><a href="">Pineapple</a></td>
                        <td>Enjoy but don't forget to peer first</td>
                        <td>$8</td>
                        <td><button>Add to cart</button></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Items;
