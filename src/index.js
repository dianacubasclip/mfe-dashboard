
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './serviceWorker';

window.renderDashboard = (containerId, history) => {
  ReactDOM.render(
    <App history={history} document={document}/>,
    document.getElementById(containerId)
  );
  unregister();
}

window.unmountDashboard = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
  console.log('unmounting dashboard')
};