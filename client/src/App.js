import "./index.css";

import React, {lazy, Suspense, useState} from 'react'
import { Route, Routes} from 'react-router-dom'

const Home = lazy(() => import('./components/Home'))
const Dashboard = lazy(() => import('./components/Dashboard'))
const About = lazy(() => import('./components/About'))
const Forgot = lazy(() => import('./components/Forgot'))
const Preferences = lazy(() => import('./components/Preferences'))
 

  

function App() {

  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
  <div className="App">
    <Suspense fallback={"LOADING"}>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Dashboard" element={<Dashboard/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Forgot" element={<Forgot/>}/>
          <Route exact path="/Preferences" element={<Preferences/>}/>
        </Routes>
    </Suspense>
  </div>
  )
}
 
export default App;
 
