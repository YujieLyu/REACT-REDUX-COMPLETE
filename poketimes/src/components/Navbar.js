import React from 'react'
import {Link,NavLink, withRouter} from 'react-router-dom'

const Navbar=(props)=>{
    // setTimeout(()=>{
    //     props.history.push('/about')
    // },2000);
    return(
        <nav className='nav-wrapper red darken-3'>
            <div className="container">
                <a className="brand-log">Poke'Times</a>
                <ul className="right">
                    {/*So we don't need put the full URL here*/}
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
};

//withRouter make Navbar as the supercharged components
export default Navbar