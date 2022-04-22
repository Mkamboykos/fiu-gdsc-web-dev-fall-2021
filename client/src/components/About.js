import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import homeBackground from '../Images/homeBackground.png'
import logo from '../Images/logo.svg'
import ManeyWu from '../Images/ManeyWu.png'

function About(){

    const defaultTitle = <div>Who We Are</div>

    const defaultDescription = <div>
        We are the Google Developer Student Club Web Development Team at Florida International University!
        <br/><br/>
        Together we are a group of individuals that are passionate about web technologies and decided to experiment with a real world application.
        <br/><br/>
        College Budgeter is a passion project that is built for college students by college students.
    </div>

    const [title, setTitle] = useState(defaultTitle);
    const [description, setDescription] = useState(defaultDescription);

    const ManeyTitle = <div>Maney Wu</div>

    const ManeyDescription = <div>
       Hi, my name is Maney Wu.
       <br/><br/>
       I’m Currently a Junior at FIU, majoring in Computer Science.
       <br/><br/>
       My hobbies are gardening and watching anime. I also like looking at frogs 🐸
    </div>
    const AboutContainer = () =>{
        return (
          <div className='aboutPageContainer'>
            <div className='aboutRowContainer'>
                <div className='aboutLeftPanel'>
                    <div className='aboutLeftCirclePanel1'>
                        <button className="aboutPicture">

                        </button>
                        
                        <img src={ManeyWu} className="aboutPicture" onClick={() => setTitle(ManeyTitle) & setDescription(ManeyDescription)}/>
                        
                        <button className="aboutPicture">
                            
                        </button>
                    </div>
                    <div className='aboutLeftCirclePanel1'>
                        <button className="aboutPicture">

                        </button>
                        <button className="aboutPicture">
                            
                        </button>
                        <button className="aboutPicture">
                            
                        </button>
                    </div>
                    <div className='aboutLeftCirclePanel1'>
                        <button className="aboutPicture">

                        </button>
                        <button className="aboutPicture">
                            
                        </button>
                        <button className="aboutPicture">
                            
                        </button>
                    </div>
                    <div className='aboutLeftCirclePanel1'>
                        <button className="aboutPicture">

                        </button>
                        <button className="aboutPicture">
                            
                        </button>
                        <button className="aboutPicture">
                            
                        </button>
                    </div>
                </div>
                <div className='aboutRightPanel'>
                    <div className='aboutRightTextContainer'>
                        <div className='aboutRightTitle'>
                            <h1 className='textBold'>
                                {title}
                            </h1>
                        </div>
                        <div className='aboutRightText'>
                            <h5 className='font-inherit'>
                                {description} 
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
      }




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
            <div className="centerItems">
                {AboutContainer()}
            </div>
            <img src={homeBackground} className='homeBackground' alt="" loading="lazy"/>
        </div>
    )
  }
  
  export default About;
