import React from "react";
import CartItem from "./CartItem"

class Cart extends React.Component {
    render () {
        const arr = [1,2,3,4,5,6]
        return (
        
            <div className="cart">
                <CartItem />
                <CartItem />
                <CartItem />
                {arr.map((item) => {
                    return item + 5
                })}
                
        
            </div>
        )
    }
}
// Iterating array in JSX 
export default Cart;