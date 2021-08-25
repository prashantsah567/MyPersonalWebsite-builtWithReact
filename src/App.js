import './App.css';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Project from './components/Projects';
import Resume from './components/Resume';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
        <>      
        <Router>
        <Header/>
        <div className="container my-3">
          <Switch>         
          <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <Project />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          </div>
        </Router>
        </>
  );
}

export default App;
