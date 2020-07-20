import React from 'react'
import {FunctionComponent, ClassComponent} from './FunClass'

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: '芒果', others: 'others'};
  }

  handleChange = (event) => {
    this.setState({user: '葡萄柚'});
    this.setState({user: '酸橙'});
    this.setState({user: '椰子'});
    this.setState({user: '芒果'});
    this.setState({user: event.target.value});
    /**
     *  State 的更新可能是异步的
     * 出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
     * 因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。
     */
    this.setState({others: this.state.others + this.state.user})
    // this.setState((state, props) => ({
    //   others: state.others + state.user
    // }))
  }

  render() {
    return (
      <div>
        <p>
          <label>
            choose profile to view :
            <select value={this.state.user} onChange={this.handleChange} >
              <option value="葡萄柚">葡萄柚</option>
              <option value="酸橙">酸橙</option>
              <option value="椰子">椰子</option>
              <option value="芒果">芒果</option>
            </select>
          </label>
        </p>
        <h1>Welcome to {this.state.user} profile</h1>{this.state.others}
        <p>
          <FunctionComponent user={this.state.user}></FunctionComponent>（函数组件）
        </p>
        <p>
          <ClassComponent user={this.state.user}></ClassComponent>（类组件）
        </p>
      </div>
    )
  }
}

export default ProfilePage