import React from "react";
import CartItem from "./CartItem"

class Cart extends React.Component {
    render () {
        
        return (
        
            <div className="cart">
                <CartItem />
        
            </div>
        )
    }
}
// Iterating array in JSX 
export default Cart;