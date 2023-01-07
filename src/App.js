//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import about from "./components/about";
import home from "./components/home";
import signup from "./components/signup";
import login from "./components/login";
import dash from './components/dash';


function App() {
  return (
    <>
    

      

      <Router>
        <Switch>
         <Route exact path="/about" component={about} />
          <Route path="/signup" component={signup} />
          <Route path="/login" component={login} />
        <Route path="/home" component={home} />
        <Route path="/" component={dash}/>
          <Redirect to="/" />
        </Switch>
      </Router>

    </>
  );
}

export default App;
