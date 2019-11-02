import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        };

        this.toggleCross = this.toggleCross.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    };

    toggleCross = (e) => {        
        this.setState({checked: e.target.checked});
    }  
    
    deleteItem = () => {
        this.props.deleteItem(this.props.id);
    }

    render() {
        const {
            description, id
        } = this.props;

        return (
            <div className="item" id={id}>
                <input type="checkbox" onChange={this.toggleCross}/>
                <div className={'description' + (this.state.checked ? ' finished-item' : '')}>{description}</div>
                <button className="delete-item" onClick={this.deleteItem}><p>Delete</p></button>
            </div>
        );
    }
}

export default Item;