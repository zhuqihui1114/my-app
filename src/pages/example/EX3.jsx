import React from 'react'

/**
 * 属性展开
 */
function Greeting (props) {  
  const formatName = () => {
    return props.firstName + ' ' + props.lastName;
  }

  return (
    <h1>
      Hello, {formatName()}!
    </h1>
  );
}

function App() {
  const props = {firstName: 'Ben2', lastName: 'Hector2'};
  
  return (
    <div>
      <Greeting firstName="Ben" lastName="Hector" />
      <br/>
      <label>属性展开写法：{'<Greeting {...props} />'}</label>
      <Greeting {...props} />
    </div>
  );
}

export default App