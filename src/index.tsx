import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { connect, Provider } from 'react-redux';
import dva from './dva';
import appModel from './models';

const options: MyTS.dva.OptProps = {
    initialState: {},
    models: appModel,
    onError(e: Error) {
        console.error('dva create app error: ', e);
    },
};

if (process.env.NODE_ENV === 'development') {
    // const { createLogger } = require('redux-logger');
    // options.onAction = createLogger();
}

const dvaApp = dva.createApp(options);
const store = dvaApp.getStore();

ReactDOM.render(
    <Provider store={store}>
            <App />
        </Provider>,
  document.getElementById('root')
);

