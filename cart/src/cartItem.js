import React from "react";
import img from './shephard.jpg'

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'MacBook',
            Quantity: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this)
    } 
    increaseQuantity = () => {
        // this.state.Quantity += 1;
        //console.log('this',this.state)
        //set state form1 
        // If we don't require prevous state we use object form
        // this.setState({
        //     Quantity: this.state.Quantity + 1
        // })

        //set state form2 {shallow merging}
        // If we require previous state we use function form
        this.setState((prevState) => {
            return {
                Quantity: prevState.Quantity + 1
            }
        })
    }
    decreaseQuantity = () => {
        
        this.setState((prevState) => {
            return {
                Quantity: prevState.Quantity - 1
            }
        })
    }
    render(){
        const { price , title , Quantity} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img src={styles.image} alt="imgage" />
                </div>
                <div className="right-block">
                    <h1>Cart Items</h1>
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style = { {color: '#777'} }>{Quantity}</div>
                    <div style = { {color: '#777'} }>{price}</div>
                    <div className="cart-item-actions">
                        {/*buttons*/}
                        <img alt="increase" className="actionicons" src="https://cdn-icons-png.flaticon.com/128/2332/2332471.png" onClick={this.increaseQuantity.bind(this)} />
                        <img alt="decrease" className="actionicons" src="https://cdn-icons-png.flaticon.com/128/2331/2331942.png" onClick={this.decreaseQuantity.bind(this)} />
                        <img alt="delete" className="actionicons" src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png" />
                    </div>
                </div>
            </div>
        );
    }
}


// style elements using objects
const styles = {
    image: {
        height: "100",
        width: "100",
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}


export default CartItem