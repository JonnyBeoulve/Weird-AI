import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/HomeContainer.js/HomeContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
