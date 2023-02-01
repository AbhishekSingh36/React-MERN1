import React from "react";
import CartItem from "./CartItem"

class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    Quanity: 1,
                    img: ''
                },
                {
                    price: 999,
                    title: 'Mobile',
                    Quanity: 1,
                    img: ''
                },
                {
                    price: 999,
                    title: 'Laptop',
                    Quanity: 1,
                    img: ''
                },
            ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this)
        this.testing()
    } 
    render () {
        
        return (
        
            <div className="cart">
                <CartItem Quanity={1} price={999} title={'Watch'} img={''}/>
        
            </div>
        )
    }
}
// Iterating array in JSX 
export default Cart;