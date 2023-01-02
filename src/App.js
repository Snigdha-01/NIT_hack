//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import about from "./components/about";
// import home from "./components/home";
import signup from "./components/signup";
import login from "./components/login";


function App() {
  return (
    <>
    

      {/* navbar */}
      <div style={{  backgroundColor: '#D8BFD8' }}>
      <nav class="navbar navbar-light bg-transparent justify-content-between border-bottom" >
        <h1 className="h2 navbar-brand" style={{ color: 'purple' }}>CYCLOFIT</h1>
        <form class="form-inline">
          <a class=" nav-link" href="about" style={{ color: 'purple' }}>About-Us <span class="sr-only">(current)</span></a>
          <a class=" nav-link" href="signup" style={{ color: 'purple' }}>Sign-up<span class="sr-only">(current)</span></a>
          <a class=" nav-link" href="login" style={{ color: 'purple' }}>Login-in <span class="sr-only">(current)</span></a>
        </form>
      </nav>
      </div>
      {/* navbar */}

      {/* round button */}
      <div class="container">
        <div class="row">
          <div class="col mt-5">
            <button type="button" class="btn rounded-5 " style={{ backgroundColor: '#E5E4E2', color: 'purple' }}>Top Fitness Tracker</button>
          </div>
        </div>
      </div>
      {/* round button */}

      {/* main content */}
      <div class="mt-2 container " id="about" name="about" >
        <div class="row">
          <div class="col">
            <h2 style={{ color: 'purple' }}>Best Way</h2>
            <h1 class="font-weight-bold">for Your Fitness</h1>
            <h1 class="font-weight-bold">Activity Track</h1>
            <p></p>
            <p class="text-muted">easiest way to track your fitness activity with Cyclofit . get your accurate data to achieve next level of yours</p>
            <a href="/" class="btn btn-lg active mb-1" role="button" aria-pressed="true" style={{ backgroundColor: 'purple', color: 'white' }}>Download Now</a>
          </div>
          <div class="row m-2">
            <img src="imgMain.png" class="img-fluid" alt="Responsive image" style={{height:"300px" , width:"600px"}} />
          </div>
        </div>
      </div>
     
      

      <footer class="text-center text-white fixed-bottom " style={{ backgroundColor: "purple" }}>
        <div class="container "></div>
        <div class="text-center p-3" style={{ backgroundColor: "purple" }}>
          © 2022 Cyclofit.com - All Rights Reserved
        </div>
      </footer>

      <Router>
        <Switch>
         <Route exact path="/about" component={about} />
          <Route path="/signup" component={signup} />
          <Route path="/login" component={login} />
          <Redirect to="/" />
        </Switch>
      </Router>

    </>
  );
}

export default App;
