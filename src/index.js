import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AddSusbscriber from './AddSubscriber';
import './common/common.css';

ReactDOM.render(<AddSusbscriber />, document.getElementById('root'));
registerServiceWorker();
