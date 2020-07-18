import React from 'react'
import {
  Link
} from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
          <Link to="/Clock">Clock （生命周期方法）</Link>
          </li>
          <li>
          <Link to="/LifeCycle">LifeCycle （生命周期方法）</Link>
          </li>
        </ul>
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
          <li><Link to="/NameForm">例子 （state）</Link></li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Home