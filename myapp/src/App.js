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

  addJess=(jess)=>{
      // console.log(jess)
      jess.id=Math.random();
      /**
       * Get problem from line 19-21
       */
      let newJessie=[...this.state.jessie,jess]
      this.setState({
        jessie: newJessie//does that mean assign all eles to the old jessie?
      })
  }

  render(){
    return (
      <div className="App">
       <h1>My first React app!</h1>
       <Jessie jessie={this.state.jessie}/>
       {/* The relationship with the addJess */}
       <AddJess addJess={this.addJess}/> 
      </div>
    );
  }
}

export default App;
