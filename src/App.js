import React, { Component } from 'react';
import Layout from './components/Layouts/Layout';
import BreadBuilder from './containers/BreadBuilder/BreadBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BreadBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
