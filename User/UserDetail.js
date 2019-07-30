import React, { Component } from 'react';
import TimeButton from './TimeButton.js';
import { Button } from 'reactstrap';

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
                <Button color="success" outline={true} onClick={this.changeResidence}>Update Residence</Button>
            <TimeButton />
            
        </div>);
    }
}

export default UserDetail;