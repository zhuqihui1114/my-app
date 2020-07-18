import React from 'react'
import Reservation from '../core/Reservation'

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 9,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      num: value
    });
  }

  render() {
    return (
      <div>
        <label>
          父组件 num:
          <input
            type="number"
            value={this.state.num}
            onChange={this.handleInputChange}/>
        </label>
        <label>num: {String(this.state.num)}</label>
        <br/>
        <br/>
        <Reservation num={this.state.num}/>
      </div>
    )
  }
}

export default LifeCycle