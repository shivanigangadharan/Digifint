import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/homepage';
import FirmPage from './components/firmpage';
import UserDetails from './components/userdetails';
import BankPage from './components/bankpage';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Dashboard from './components/dashboard';

function App() {
  const client = new ApolloClient({
    uri: "https://digifin-portal.herokuapp.com/v1/graphql",
    headers: {
      'x-hasura-admin-secret': 'digifint'
    }
  });
  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <Switch>
            <Route component={HomePage} path="/" exact />
            <Route component={FirmPage} path="/firmpage" />
            <Route component={UserDetails} path="/userdetails" />
            <Route component={BankPage} path="/bankpage" />
            <Route component={Dashboard} path="/dashboard" />



          </Switch>
        </Router>

      </div>
    </ApolloProvider>
  );
}

export default App;
