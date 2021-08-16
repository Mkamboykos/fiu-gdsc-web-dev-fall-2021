import './index.css'

import {Route} from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">

       {/* The Router is used to create different links for each class */}
      <Route exact path="/" component={Home}/>
      <Route exact path="/Dashboard" component={Dashboard}/>

    </div>
  )
}

export default App;
