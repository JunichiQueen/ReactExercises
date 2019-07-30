import React, { Component } from 'react';
import TimeButton from './TimeButton.js';

class UserDetail extends Component {
    render() {
        return (
        <div>
            <ul>
                <li>My name is {this.props.userData.username}</li>
                <li>My profession is {this.props.userData.job}</li>
                <li>My age is {this.props.userData.age}</li>
                <li>I live in {this.props.residence}</li>
            </ul>
            <TimeButton />
            
        </div>);
    }
}

export default UserDetail;