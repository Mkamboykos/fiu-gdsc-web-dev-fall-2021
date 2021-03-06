import "./index.css";

import React, {lazy, Suspense} from 'react'
import { Route, Routes} from 'react-router-dom'

const Home = lazy(() => import('./components/Home'))
const Dashboard = lazy(() => import('./components/Dashboard'))
const About = lazy(() => import('./components/About'))
const Forgot = lazy(() => import('./components/Forgot'))
const NotFound = lazy(() => import('./components/StatusCodes/404'))
 

function App() {

  return (
  <div className="App">
    <Suspense fallback={"LOADING"}>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Dashboard/:username" element={<Dashboard/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Forgot" element={<Forgot/>}/>
          <Route exact path="/404" element={<NotFound/>}/>
        </Routes>
    </Suspense>
  </div>
  )
}
 
export default App;
 
