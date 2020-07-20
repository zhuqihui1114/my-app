import React from 'react'

/**
 * 1、函数式组件不会被实例化。整体渲染性能的提升
 * 2、函数式组件没有状态
 * 3、函数式组件没有访问生命周期的方法
 */

function FunctionComponent(props) {
  const showMessage = () => {
    alert('Followed ' + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 2000);
  };

  return (
    <button onClick={handleClick}>Follow</button>
  );
}

class ClassComponent extends React.Component {
  showMessage = () => {
    alert('Followed ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 2000);
  };

  render() {
    return <button onClick={this.handleClick}>Follow</button>;
  }
}

export {FunctionComponent, ClassComponent}