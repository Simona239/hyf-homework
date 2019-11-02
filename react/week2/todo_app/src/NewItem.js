import React from 'react';

class NewItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.updateData(this.state.value);
        this.setState({value: ''});
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                        placeholder="Enter a new task"
                        value={this.state.value}
                        onChange={this.handleChange}/>
                </form>
        );
    }
}

export default NewItem;