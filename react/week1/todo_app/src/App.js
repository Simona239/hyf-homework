import React from 'react';
import './App.css';
import TodoList from './todoList';
import itemList from './itemData';

class App extends React.Component {
  render() {
    return (
      <div className="App"><TodoList list={itemList}/></div>
    );
  }
}
export default App;
