import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import homeBackground from '../Images/homeBackground.png'


function About(){







    return (
        <div>
            <nav>
                <Link to={`/`}>Home Icon</Link>
                <Link to={`/`} style={{textDecoration: "none"}}><button>Home</button></Link>
                <Link to={`/`} style={{textDecoration: "none"}}><button>Login</button></Link>
            </nav>
            <img src={homeBackground} className='homeBackground' alt="" loading="lazy"/>
        </div>
    )
  }
  
  export default About;
