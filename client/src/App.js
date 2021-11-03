import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@material/react-icon-button/dist/icon-button.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import RecipeCard from "./components/RecipeCard";
import About from "./components/About";
import Nav from "./components/Nav";
 
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* The Router is used to create different links for each class */}
          <Route exact path="/" component={Home} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/About" component={About} />
 
          <Route exact path="/test" component={RecipeCard} />
        </Switch>
      </div>
    </Router>
  );
}
 
export default App;
 
