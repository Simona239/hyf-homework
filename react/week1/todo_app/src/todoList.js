import React from 'react';
import Item from './Item';


class TodoList extends React.Component {
    render() {
        return (
            <div>
                <header>The List of Things To Do</header>
                <ul>
                    {this.props.list.map(item => {
                        return (<Item key={item.description} description={item.description} deadline={item.deadline} id={item.id}/>);
                      })
                    }
                </ul>
            </div>
        );
    }
}
export default TodoList;