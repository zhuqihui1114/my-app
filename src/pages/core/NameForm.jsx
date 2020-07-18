import React, { Component } from 'react'

class NameForm extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // 不要直接修改state ， 此代码不会重新渲染组件
    // this.state = {value: event.target.value};

    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    console.log('render -------- ')
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
        <br/>
        <label>
          state 中 value 字段: {this.state.value}
        </label>
      </form>
    );
  }
}

export default NameForm