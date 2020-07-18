import React from 'react'

/**
 * 用户定义的组件必须以大写字母开头
 * 
 */

// 错误！组件应该以大写字母开头：
function hello(props) {  
  // 正确！这种 <div> 的使用是合法的，因为 div 是一个有效的 HTML 标签
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // 错误！React 会认为 <hello /> 是一个 HTML 标签，因为它没有以大写字母开头：  
  // return <hello toWhat="World" />;
  return null
}

export default HelloWorld