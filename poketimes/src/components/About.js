import React from 'react';
import Rainbow from '../hoc/Rainbow'

const About=()=>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>
            In Chapter Two, get introduced to React components. They are the building blocks of any React Application you will build. Go ahead and review that chapter if you are not yet comfortable with React components and then head back here.
            </p>
        </div>
    )
}

export default Rainbow(About);  