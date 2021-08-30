import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalHeader from './components/GlobalHeader.js';
import GlobalFooter from './components/GlobalFooter.js';
import LoginComponent from './components/LoginComponent';
import Men from './components/Men';
import Women from './components/Women';
import Home from './components/Home';
import Boy from './components/Boy';
import Girl from './components/Girl';
import Kids from './components/Kids';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <GlobalHeader name='Search for product'/>
    
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route path="/loginComponent" component={LoginComponent}/>
      <Route path="/men" component={Men}/>
      <Route path="/women" component={Women}/>
      <Route path="/boy" component={Boy}/>
      <Route path="/girl" component={Girl}/>
      <Route path="/kids" component={Kids}/>
      </Switch>

      <GlobalFooter name='Footer is here'/>
      </Router>
       
         
      
     


    </div>
  );
}

export default App;
