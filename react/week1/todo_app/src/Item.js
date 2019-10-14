import React from 'react';

class Item extends React.Component {
    render() {
        
        const {
            description,
            deadline
        } = this.props;

        return (
            <li>
                {description} - {deadline.toString().slice(0, 16)}
            </li>
        );
    }
}

export default Item;