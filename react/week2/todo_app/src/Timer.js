import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          timer: this.state.timer + 1
        });
    }

    render() {
        return (
            <div className="timer">
                This app has now been used for {this.state.timer} seconds. 
            </div>
        );
    }
}

export default Timer;