import React, { Component } from 'react';
import Mailing from './components/Mailing/Mailing';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <div className="mt-5">
            <Mailing />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
