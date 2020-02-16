import React, { Component } from 'react';
import Workers from './Workers';
import AddWorker from './AddWorker';

class App extends Component {
  state = {
    workers: [
      { name: 'Amy', age: '14', belt: 'white', id: 1 },
      { name: 'Bella', age: '24', belt: 'yellow', id: 2 },
      { name: 'Cindy', age: '35', belt: 'black', id: 3 }
    ]
  }

  addWorker = (worker) => {
    // console.log(worker)
    worker.id = Math.random();
    /**
     * Get problem from line 19-21
     */
    let newWorkers = [...this.state.workers, worker]
    this.setState({
      workers: newWorkers//does that mean assign all eles to the old workers?
    })
  }

  deleteWorker = (id) => {

  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        {/* Workers is a component including the worker's info and a delete buttion
       Workers is a represential componenet defined in Workers.js 
       */}
        <Workers deleteWorkers={this.deleteWorkers} workers={this.state.workers} />
        {/* If we don't assign a valid props to all parameters in Workers, the workers will be 'undefined',
        but 'undefined' don't have the map method */}
        {/* <Workers deleteWorkers={this.deleteWorkers}/> */}
        {/* The relationship with the addJess */}
        <AddWorker addWorker={this.addWorker} />
      </div>
    );
  }
}

export default App;
