import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/homepage';
import FirmPage from './components/firmpage';
import UserDetails from './components/userdetails';
import BankPage from './components/bankpage';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={FirmPage} path="/firmpage" />
          <Route component={UserDetails} path="/userdetails" />
          <Route component={BankPage} path="/bankpage" />



        </Switch>
      </Router>

    </div>
  );
}

export default App;
