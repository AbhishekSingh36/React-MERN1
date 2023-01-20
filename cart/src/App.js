import React from "react";
import CartItem from "./CartItem";
//import "./app.css"

function App() {
  return (
    <div className="App">
      <h1>Cart</h1>
      <h2>Items Added</h2>
      <CartItem />
    </div>
  );
}

export default App;


//export 'default' (imported as 'CartItem') was not found in './CartItem' (module has no exports)
