import React from 'react';
import spacexLogo from './space-x-logo.jpg'
import Launches from './components/Launches/Launches'
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

import './App.css';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
});

function App () {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img src={spacexLogo} style={{width: '300px', display: 'block', margin: '0 auto'}} alt=""/>
        <Launches/>
      </div>
    </ApolloProvider>
  );
}

export default App;
