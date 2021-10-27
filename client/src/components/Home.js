import React from 'react'
import {Link} from 'react-router-dom'
import RecipeCard from './RecipeCard'
function Home() {
    return (
      <div>
        <Link to="/Dashboard" className="link">To Dashboard</Link>
      </div>
    )
}

export default Home;
