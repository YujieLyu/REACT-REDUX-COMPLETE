import React, { Component } from 'react';

class Jessie extends Component{
    render(){
        // console.log(this.props);
        // Use variables is for reuse
        const {name,age,belt}=this.props;
        return(
            <div className="jessie">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Belt: {belt}</div>

            </div>
        )
    }
}

export default Jessie