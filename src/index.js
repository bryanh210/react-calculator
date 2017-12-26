import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Calculator from './Calculator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
