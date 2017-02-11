import React from 'react';

const Counter = (props) => {
  return (<div>
    {props.count}
    <button onClick={props.increment}>Increment</button>
  </div>)
};

export default Counter;
