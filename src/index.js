import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import App from './game/tic-tac-toe.js';
import * as serviceWorker from './serviceWorker';

// import {Provider} from 'react-redux'
// import store from './redux/store'

// ReactDOM.render((
// //使用Provider 组件将APP主组件包裹住，这样内部组件都有Store种提供的属性。
//     <Provider store={store}>
//         <App/>
//     </Provider>
// ), document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
