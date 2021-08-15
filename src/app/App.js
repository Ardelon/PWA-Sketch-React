import React from "react";
import './assets/index.scss'
import RouterComponent from './router/router.js';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <RouterComponent/>                        
        </Provider>
    </div>
  );
}

export default App;
