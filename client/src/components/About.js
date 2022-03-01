import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import homeBackground from '../Images/homeBackground.png'
import logo from '../Images/logo.svg'

function About(){







    return (
        <div>
            <nav>
                <div>
                    <Link to={`/`}>
                        <img src={logo} alt="logo" className='logoHome' loading="lazy"/>
                    </Link>
                </div>
                <div className='navButtons'>
                    <div className='navButtonRight'>
                        <Link to={`/`} style={{textDecoration: "none"}}><button className="yellowButton">Home</button></Link>
                    </div>
                </div>
            </nav>
            <img src={homeBackground} className='homeBackground' alt="" loading="lazy"/>
        </div>
    )
  }
  
  export default About;
