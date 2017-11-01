import React from 'react';
import ReactDOM from 'react-dom';
import Peony from './Common';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={ store }>
        <Peony/>
    </Provider>,
    document.getElementById('content')
);