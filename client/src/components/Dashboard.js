import React, { useState, useEffect } from 'react';
import {UserAuthenticator} from '../Helpers/UserAuthenticator'
import logo from '../Images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import {IoPersonCircle} from 'react-icons/io5';

function Dashboard(){

  const user = UserAuthenticator();

  let navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = (e) => {
    e.preventDefault();
    setShowMenu((state) => !state)
  }


  const handleLogout = async () =>{
    await Axios.post(`http://localhost:8000/Login/logout/${user.info.username}`)
    user.renderPage = false;
    return navigate(`/`);
  }

  return (
    <div>
      {user.renderPage === true ? (
        <div>
          <nav>
            <Link to={`/`}>
              <img src={logo} alt="logo" className="logoHome" loading="lazy" />
            </Link>
            <div className="navButtons">
              <div className="navButtonRightProfile">
                <button className="profileButton navButtonRight" onClick={(e) => handleShowMenu(e)}>
                  <IoPersonCircle/>
                </button>
                
                { showMenu ? 
                  (
                    <div className="profileMenu">
                      <button> Account </button>
                      <button> Settings </button>
                      <button onClick={() => handleLogout()}> Logout </button>
                    </div>
                  ) 
                  : (null)
                }
                
              </div>
            </div>
          </nav>
          <div className='yellowBackground'/>
          <div className='whiteBackground'>

          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Dashboard;



// function Dashboard(){

//   const user = UserAuthenticator();





//   return (
//     <div>
//       {user.renderPage === true ? 
//           <div>
//             <h1>Dashboard</h1>
//           </div>
//       : ''}
//     </div>
//   )
// }

// export default Dashboard;






























// import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// class Dashboard extends Component {
//     render() {
//         return (
//             <div>
//                 <Link to="/" className="link">To Home</Link>
//                 <h1>Any place in your app!</h1>
//      <Formik
//        initialValues={{ email: '', password: '' }}
//        validate={values => {
//          const errors = {};
//          if (!values.email) {
//            errors.email = 'Required';
//          } else if (
//            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//          ) {
//            errors.email = 'Invalid email address';
//          }
//          return errors;
//        }}
//        onSubmit={(values, { setSubmitting }) => {
//          setTimeout(() => {
//            alert(JSON.stringify(values, null, 2));
//            setSubmitting(false);
//          }, 400);
//        }}
//      >
//        {({ isSubmitting }) => (
//          <Form>
//            <Field type="email" name="email" />
//            <ErrorMessage name="email" component="div" />
//            <Field type="password" name="password" />
//            <ErrorMessage name="password" component="div" />
//            <button type="submit" disabled={isSubmitting}>
//              Submit
//            </button>
//          </Form>
//        )}
//      </Formik>
//             </div>
//         )
//     }
// }

// export default Dashboard;