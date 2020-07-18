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
            <Link to="/HelloWorld">HelloWorld</Link>
          </li>
          <li>
          <Link to="/NameForm">NameForm （state / 受控组件）</Link>
          </li>
          <li>
          <Link to="/Reservation">Reservation （处理多个输入）</Link>
          </li>
          <li>
          <Link to="/ListOfTenThings">ListOfTenThings （函数作为子元素）</Link>
          </li>
          <li>
          <Link to="/Clock">Clock （生命周期方法）</Link>
          </li>
          <li>
          <Link to="/LifeCycle">LifeCycle （生命周期方法）</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/TicTacToe">TicTacToe</Link>
          </li>
          <li>
          <Link to="/FilterableProductTable">FilterableProductTable</Link>
          </li>
          <li>
          <Link to="/BoilingVerdict">BoilingVerdict</Link>
          </li>
        </ul>
        <ul>
          <li><Link to="/EX1">例子1</Link></li>
          <li><Link to="/EX2">例子2</Link></li>
          <li><Link to="/EX3">例子3</Link></li>
          <li><Link to="/EX4">例子4</Link></li>
          <li><Link to="/EX5">例子5</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home