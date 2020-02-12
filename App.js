import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };
  handleDelete = counterId => {
    const newCounters = this.state.counters.filter(
      element => element.id !== counterId
    );
    for (let i = 0; i < newCounters.length; i++) {
      newCounters[i].id = [i];
    }
    this.setState({ counters: newCounters });
    // the selected element is filtered out. Then the setState counters is redefined
    // to newCounters which is the filtered array
  };
  handleReset = () => {
    const resetCounters = this.state.counters.map(element => {
      element.value = 0;
      return element;
    });
    this.setState({ counters: resetCounters });
  };
  handleIncrement = id => {
    const countersCopy = [...this.state.counters];
    const counterArray = [];
    for (let i = 0; i < this.state.counters.length; i++) {
      counterArray.push(this.state.counters[i].value);
    }

    const index = id;
    countersCopy[index].value++;
    this.setState({ counters: countersCopy });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter(function(element) {
              return element.value > 0;
            }).length
          }
        />
        ;
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
