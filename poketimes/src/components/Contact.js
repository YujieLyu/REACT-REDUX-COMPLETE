import React from 'react';

const Contact = (props) => {
    /*Redirect: Use the history in props added by routers, history.push(Here is the destination)*/
    setTimeout(()=>{
       props.history.push("/about")
    }, 2000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Contact us!</p>
        </div>
    )
};

export default Contact