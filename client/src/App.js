import "./index.css";

import React, {lazy, Suspense} from 'react'
import { BrowserRouter as Route, Link, Routes, Router} from 'react-router-dom'

const Home = lazy(() => import('./components/Home'))
const Dashboard = lazy(() => import('./components/Dashboard'))
const About = lazy(() => import('./components/About'))
const Forgot = lazy(() => import('./components/Forgot'))
 
function App() {

  return (
  <Suspense fallback={"LOADING"}>
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="about"> About </Link>
      </nav>
    </Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Dashboard" element={<Dashboard/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Forgot" element={<Forgot/>}/>
      </Routes>
  </Suspense>
  );
}
 
export default App;
 
