import React from 'react';
import Item from './Item';
import NewItem from './NewItem';
import todos from './itemData';


class ItemList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: todos
        }
    }

    updateData = (value) => {
        todos.push({ id: new Date().getUTCMilliseconds(), description: value })
        this.setState({todos: todos})
    }

    deleteItem = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(el => el.id !== id)
        }));
    }

    render() {
        console.log(this.state.todos.length);
        return (
            <div>
                <header>The List of Things To Do</header>
                <NewItem updateData={this.updateData} />
                  <div className="todos-list">
                    {this.state.todos.map(item => {
                        return (
                            <Item
                                deleteItem={this.deleteItem}
                                key={item.id.toString()}
                                description={item.description} id={item.id}
                            />
                        );
                    })}
                </div>
                <p className={'hidden' + (this.state.todos.length === 0 ? ' shown' : '')}>Congratulations! You have completed all the tasks!</p>
            </div>
        );
    }
}

export default ItemList; 

