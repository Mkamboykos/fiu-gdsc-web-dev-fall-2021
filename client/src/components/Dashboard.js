import React from 'react';
import {UserAuthenticator} from '../Helpers/UserAuthenticator'
import logo from '../Images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard(){

  const user = UserAuthenticator();





  return (
    <div>
      {user.renderPage === true ? (
        <div>
          <nav>
            <Link to={`/`}>
              <img src={logo} alt="logo" className="logoHome" loading="lazy" />
            </Link>
            <div className="navButtons">
              <div className="navButtonRight">
                <button
                  onClick={() => setShowLogin(true)}
                  className="yellowButton navButtonRight"
                >
                  Login
                </button>
              </div>
            </div>
          </nav>
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