import './App.css';
import LandingPage from './Components/Pages/LandingPage';
import { Redirect, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Pages from './Components/Pages/Pages';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Pages/Shop';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact>
            <Redirect to='/home'></Redirect>
        </Route>
        <Route path='/home' exact>
          <LandingPage />
        </Route>
        <Route path='/pages' exact>
          <Pages />
        </Route>
        <Route path='/blog' exact>
          <Pages />
        </Route>
        <Route path='/shop' exact>
          <Shop />
        </Route>
        <Route path='/contact' exact>
          <Contact />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
