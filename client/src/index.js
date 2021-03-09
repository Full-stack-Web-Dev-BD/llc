import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil'
import { icons } from './assets/icons'
React.icons = icons

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot> , document.getElementById('root')
);
serviceWorker.unregister();
