import React, { Component } from "react";
import Counter from "./counter";
// Counters is the parent component. You need to import the child
// components into the parent component.

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          {" "}
          Reset{" "}
        </button>
        {this.props.counters.map(element => (
          <Counter
            key={element.id}
            id={element.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            value={element.value}
            counter={element.value}
          />
        ))}
        {/* renders the Counter component for each element in the counters array
        such that each component will have a key = counters[id] and value = counters[value]. In 
        the onDelete, we are passing the this.handleDelete method to the Counter 
        component so that the Counter component will have the method in its props*/}
      </div>
    );
  }
}

export default Counters;
