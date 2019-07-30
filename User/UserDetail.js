import React, { Component } from 'react';
import TimeButton from './TimeButton.js';

class UserDetail extends Component {
    constructor(){
        super();
        this.state={
            residence: "Salford"
        }
    }
    changeResidence = () => {
        this.setState({
            residence: document.getElementById('newres').value
        })

    }
    render() {
        return (
        <div>
            <ul>
                <li>My name is {this.props.userData.username}</li>
                <li>My profession is {this.props.userData.job}</li>
                <li>My age is {this.props.userData.age}</li>
                <li>I live in {this.state.residence}</li>
            </ul>
            <input id='newres'></input>
                <button onClick={this.changeResidence}>Update Residence</button>
            <TimeButton />
            
        </div>);
    }
}

export default UserDetail;