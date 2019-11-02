import React from 'react';

import './App.css';
import ItemList from './ItemList';
import Timer from './Timer';
import todos from './itemData';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ItemList todos={todos}/>
        <Timer/>
      </div>
    );
  }
}
export default App;
