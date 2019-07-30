import React, { Component } from 'react';

class TimeButton extends Component {
    constructor(){
        super();
        this.state={
            time: new Date().getHours() + ":" + new Date().getMinutes()
        }
    }
    
    timeClick = () => {
        this.setState({
            time: new Date().getHours() + ":" + new Date().getMinutes()
        });
    }
    render() {
        return (
            <div>
                <button 
                    onClick={this.timeClick}>
                    Update Time
                </button>
                <p>Time: {this.state.time.toString()}</p>
            </div>

        )
    }
}

export default TimeButton;