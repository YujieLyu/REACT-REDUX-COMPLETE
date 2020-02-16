import React,{Component} from 'react'

class AddWorker extends Component{
    state={
        name:null,
        age:null,
        belt:null
    } 
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value //match the HTML id
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addWorker(this.state) //What does this.state contain? -- So here the state contains user's input
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label htmlFor="name">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddWorker