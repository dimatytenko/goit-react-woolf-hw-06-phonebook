import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'components/App';
import './index.css';
import rootStor from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={rootStor.store}>
      <PersistGate loading={null} persistor={rootStor.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
