import './App.css';
import LandingPage from './Components/Pages/LandingPage';
import { Redirect, Switch } from 'react-router-dom';
import { Route } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route path='/' exact>
            <Redirect to='/home'></Redirect>
        </Route>
        <Route path='/home' exact>
          <LandingPage />
        </Route>
      </Switch> */}
      <LandingPage />
    </div>
  );
}

export default App;
