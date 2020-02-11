import React, { Component } from "react";

class Counter extends Component {
  render() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter === 0 ? "warning" : "primary";
    //adding the warning(yellow) color if count === 0

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.id)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          {/* in order to delete a counter, you have to delete it from the array 
          which is located in the <Counters /> component. onDelete  was a method
          that was passed to the Counter component's props */}
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    return this.props.counter === 0 ? "Zero" : this.props.counter;
  }
}

export default Counter;
