import React, {Component} from 'react';
import Layout from './components/layout/layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>Testing the layout component</p>
        </Layout>
      </div>
    );
  }
}

export default App;
