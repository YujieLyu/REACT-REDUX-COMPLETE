import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 33, belt: "black", id: 1 },
      { name: "Yoshi", age: 23, belt: "green", id: 2 },
      { name: "Crystal", age: 53, belt: "red", id: 3 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = this.state.ninjas.length + 1;
    let newNinjas=[...this.state.ninjas, ninja];
    this.setState({
      ninjas: newNinjas
    })
  }

  deleteNinja=(id)=>{
    let updatedNinjas=this.state.ninjas.filter(ninja=>{
      return ninja.id!==id;
    });
    this.setState({
      ninjas:updatedNinjas
    })
  }

  componentDidMount(){
    console.log('component mounted')
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componenet updated');
    console.log(prevProps,prevState)

  }

  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
