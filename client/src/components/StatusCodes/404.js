import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return(
      <div className='pageNotFoundContainer'>
          <h1 className='pageNotFound404'>404</h1>
          <h1> Page Not Found</h1>
          <br/>
          <span>Return back <Link to="/" className="link">Home</Link></span>
      </div>
  )
}

export default NotFound;