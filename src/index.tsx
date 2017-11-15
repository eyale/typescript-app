import * as React from 'react';
import * as DOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

DOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
