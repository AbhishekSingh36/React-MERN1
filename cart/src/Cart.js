import React from "react";
import CartItem from "./CartItem"

class Cart extends React.Component {
    render () {
        
        return (
        
            <div className="cart">
                <CartItem Quanity={1} price={999} title={'Watch/>
        
            </div>
        )
    }
}
// Iterating array in JSX 
export default Cart;