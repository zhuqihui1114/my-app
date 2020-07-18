import React from 'react'

/**
 * 【属性展开】
 * 
 * 在上述例子中，kind 的 prop 会被安全的保留，它将不会被传递给 DOM 中的 <button> 元素。 
 * 所有其他的 props 会通过 ...other 对象传递，使得这个组件的应用可以非常灵活。你可以看到它传递了一个 onClick 和 children 属性。
 * 属性展开在某些情况下很有用，但是也很容易将不必要的 props 传递给不相关的组件，或者将无效的 HTML 属性传递给 DOM。
 * 
 * 我们建议谨慎的使用该语法。
 */
const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};

export default App