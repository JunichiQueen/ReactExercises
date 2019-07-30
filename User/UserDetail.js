import React, { Component } from 'react';

class UserDetail extends Component {
    render() {
        return (
        <div>
            <ul>
                <li>My name is {this.props.userData.username}</li>
                <li>My profession is {this.props.userData.job}</li>
                <li>My age is {this.props.userData.age}</li>
            </ul>
            
        </div>);
    }
}

export default UserDetail;