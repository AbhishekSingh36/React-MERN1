import ReactDOM from "react-dom";
import React, { Component } from "react";
import "../styles.css";

class Counter extends React.Component {
  // class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    // Increase the value of Count by 1
    this.setState((currState) => {
      return { count: currState.count + this.props.diff };
    });
  };

  decrement = () => {
    // Decrease the value fo Count by 1
    this.setState((currState) => {
      return { count: currState.count - this.props.diff };
    });
  };

  render() {
    // let variable = 2;
    return (
      <div>
        <h1 className="counter-display">{this.state.count}</h1>
        <button onClick={this.increment}>+{this.props.diff}</button>
        <button onClick={this.decrement}>-{this.props.diff}</button>
        {/* {variable} */}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter diff={1} />
        <Counter diff={10} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
