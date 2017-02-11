import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counter from './reducers';
import CounterContainer from './CounterContainer';

let store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


class App extends React.Component {
  render() {
    return (<Provider store={store}>
    <div>
      <CounterContainer />
    </div>
  </Provider>)
  }
}

render(<App />, document.getElementById('app'));
