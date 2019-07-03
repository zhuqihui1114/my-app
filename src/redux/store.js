import {createStore,applyMiddleware} from 'redux'
import {finalReducer } from './reducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';

//生成store对象
const store = createStore(finalReducer,applyMiddleware(thunk, createLogger));//内部会第一次调用reducer函数，得到初始state

export default store