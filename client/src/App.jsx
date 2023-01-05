import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Detail from './components/Detail/Detail';
import { RecipeCreate } from './components/RecipeCreate/RecipeCreate';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
          <Route exact path="/" component={LandingPage}/>
          <Route path="/home" component={Home}/>
          <Route path="/recipes/:id" component={Detail}/>
          <Route path="/recipe" component={RecipeCreate}/>
    </div>
  </BrowserRouter>
  );
}

export default App;
