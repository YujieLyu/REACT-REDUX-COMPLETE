import React from 'react';
// Why const here? Why not function?
const Jessie=({jessie})=>{

        // console.log(this.props);
        // Use variables is for reuse
        // TODO: Need help here
        //Method#1:
        // const jessList=jessie.map(jess=>{
        //     if(jess.age>20){
        //         return(
        //             <div className="jessie" key={jess.id}>
        //             <div>Name: {jess.name}</div>
        //             <div>Age: {jess.age}</div>
        //             <div>Belt: {jess.belt}</div>
        //             </div>
        //         )
        //     }else{
        //         return null
        //     }
        //     // jess here is the individual element inside the list, it returns its own jsx output
            
        // })
        //Method#2:
        const jessList=jessie.map(jess=>{
            return jess.age>20 ? (
                <div className="jessie" key={jess.id}>
                <div>Name: {jess.name}</div>
                <div>Age: {jess.age}</div>
                <div>Belt: {jess.belt}</div>
                </div> 
            ): null
        });
        return(
            <div className="jess-list">
                {jessList}
            </div>
        )
    }

export default Jessie