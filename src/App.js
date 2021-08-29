import './App.css';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Project from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/about"> <About /> </Route>
          <Route exact path="/projects"> <Project /> </Route>
          <Route exact path="/resume"> <Resume /> </Route>
        </Switch>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
