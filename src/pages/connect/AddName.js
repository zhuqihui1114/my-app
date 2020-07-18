
import {connect} from 'react-redux'
import {addNameCreater,addAgeCreater} from './redux/action'
import AddName from './component/AddName'
export default connect(
    state => ({
        lastname:state.addName,
        lastage:state.addAge
    }),
    {addNameCreater,addAgeCreater}
)(AddName)


// 入口文件中
// import {Provider} from 'react-redux'
// import store from './redux/store'

// ReactDOM.render((
// //使用Provider 组件将APP主组件包裹住，这样内部组件都有Store种提供的属性。
//     <Provider store={store}>
//         <App/>
//     </Provider>
// ), document.getElementById('root'));