import React from 'react'
import {
  Link
} from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        {/* <ul>
          <li>
            <Link to="/TicTacToe">TicTacToe</Link>
          </li>
          <li>
          <Link to="/BoilingVerdict">BoilingVerdict</Link>
          </li>
        </ul> */}
        <ul>
          <li><Link to="/EX1">例子1（JSX 中嵌入表达式）</Link></li>
          <li><Link to="/EX2">例子2（用户定义的组件必须以大写字母开头）</Link></li>
          <li><Link to="/EX3">例子3（属性展开）</Link></li>
          <li><Link to="/EX4">例子4（属性展开）</Link></li>
          <li><Link to="/EX5">例子5（JavaScript 表达式作为子元素）</Link></li>
          <li><Link to="/EX6">例子6（函数作为子元素）</Link></li>
          <li><Link to="/NameForm">例子（state）</Link></li>
          <li><Link to="/ProfilePage">例子（函数组件与类组件）</Link></li>
          <li><Link to="/LifeCycle">例子（生命周期方法）</Link></li>
          <li><Link to="/Clock">例子（生命周期的简单应用Clock）</Link></li>
          <li><Link to="/CounterButton">例子（生命周期的shouldComponentUpdate应用）</Link></li>
          <li><Link to="/ScrollingList">例子（生命周期的getSnapshotBeforeUpdate应用）</Link></li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Home