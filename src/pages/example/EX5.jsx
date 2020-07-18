import React from 'react'

// JavaScript 表达式作为子元素
function Item(props) {
  return <li>{props.message}</li>;
}

function TodoList() {
  const todos = ['finish doc', 'submit pr', 'nag dan to review'];
  return (
    <ul>
      {todos.map((message) => <Item key={message} message={message} />)}
    </ul>
  );
}

// 函数作为JSX 子元素
// 调用子元素回调 numTimes 次，来重复生成组件
// function Repeat(props) {
//   let items = [];
//   for (let i = 0; i < props.numTimes; i++) {    items.push(props.children(i));
//   }
//   return <div>{items}</div>;
// }

// function ListOfTenThings() {
//   return (
//     <Repeat numTimes={10}>
//       {
//       (index) => <div key={index}>This is item {index} in the list</div>
//       }
//     </Repeat>
//   );
// }

export default TodoList