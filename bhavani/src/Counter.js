import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>n
        <h1>Counter using Class Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;