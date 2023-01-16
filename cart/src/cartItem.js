import React from "react";
import img from './shephard.jpg'

class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img src={styles.image} alt="imgage"/>
                </div>
                <div className="right-block">
                    <h1>Cart Items</h1>
                    <div style={ {fontSize: 25} }>Phone</div>
                    <div style = { {color: '#777'} }>Rs 999</div>
                    <div style = { {color: '#777'} }>Quantity</div>
                    <div className="cart-item-actions">
                        {/*buttons*/}
                    </div>
                </div>
            </div>
        );
    }
}


// style elements using objects
const styles = {
    image: {
        height: "110px",
        width: "110px",
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}


export default CartItem