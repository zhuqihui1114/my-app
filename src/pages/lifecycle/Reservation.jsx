import React from 'react'

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: props.num
    };

    this.handleInputChange = this.handleInputChange.bind(this);

    // 无法为对象的只读属性“num”赋值
    // props.num  = 12
    console.log('constructor---------')
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps!',props, state)
    // if (nextProps.num !== prevState.numberOfGuests) {
    //   return {
    //     numberOfGuests: nextProps.num,
    //   };
    // }
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate!',prevProps, prevState)
    return null
  }

  // componentWillMount() {
  //   console.log('Component WILL MOUNT!')
  // }
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }
  // componentWillReceiveProps(newProps) {
  //   console.log('Component WILL RECEIVE PROPS!', newProps)
  // }
  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate',newProps, newState)
    return true;
  }
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('Component WILL UPDATE!',nextProps, nextState);
  // }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }

  render() {
    console.log('render---------')
    return (
      <form>
        <label>
          参与:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <label>isGoing: {String(this.state.isGoing)}</label>
        <br />
        <label>
          来宾人数:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <label>numberOfGuests: {this.state.numberOfGuests}</label>
        <br/>
        <label>子组件中 props num: {this.props.num}</label>
      </form>
    );
  }
}
export default Reservation