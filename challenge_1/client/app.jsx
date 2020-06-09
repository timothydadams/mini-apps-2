import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return (
    <div>React is working!</div>
  )
}


ReactDom.render(<App />, document.getElementById('app'));