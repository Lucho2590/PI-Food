import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';


function App() {
  return (
  <BrowserRouter>
    <div className="App">
    <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
    </Switch>
      {/* <h1>hjgdgjhdhgdf</h1> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
