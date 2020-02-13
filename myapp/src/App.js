import React, { Component } from 'react';
import Jessie from './Jessie';
import AddJess from './AddJess';

class App extends Component {
  state={
    jessie:[
      {name:'Amy', age:'14', belt:'white', id:1},
      {name:'Bella', age:'24', belt:'yellow', id:2},
      {name:'Cindy', age:'35', belt:'black', id:3}
    ]
  }
  render(){
    return (
      <div className="App">
       <h1>My first React app!</h1>
       <Jessie jessie={this.state.jessie}/>
       <AddJess />
      </div>
    );
  }
}

export default App;
