import React from 'react'
class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div style={{background: this.props.color}}>
        <button
          color={this.props.color}
          onClick={() => this.setState(state => ({count: state.count + 1}))}>
          Count: {this.state.count}
        </button>
      </div>
    );
  }
}

class CounterColor extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: 'red'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <p>
          <label>
            choose profile to view :
            <select value={this.state.value} onChange={this.handleChange} >
              <option value="red">red</option>
              <option value="black">black</option>
              <option value="blue">blue</option>
              <option value="green">green</option>
            </select>
          </label>
        </p>
        <CounterButton color={this.state.value}></CounterButton>
      </div>
    );
  }
}


export default CounterColor