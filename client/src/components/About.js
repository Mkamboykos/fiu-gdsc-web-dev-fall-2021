import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

function About(){







    return (
        <div>
            <nav>
                <Link to={`/`}>Home Icon</Link>
                <Link to={`/`} style={{textDecoration: "none"}}><button>Login</button></Link>
            </nav>
            <h2>About</h2>




        </div>
    )
  }
  
  export default About;
