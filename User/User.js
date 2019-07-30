import React, { Component } from 'react';
import UserDetail from './UserDetail';
import { spreadElement } from '@babel/types';

// class User extends Component {
//     render() {
//         return (
//             <div>
//                 <p>user page works1!</p>
//                 <p>The number passed to SubComponent was: {this.props.onRender()}</p>
//                 <UserDetail />
//             </div>
//         )
//     }
// }

class User extends Component {
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

    myUserData = {
        username: "Max Payne",
        job: "Police Officer",
        age: "35",
    }
    render() {
        return (
            <div>
                <p>user page works1!</p>
                <p>You are visitor number: {this.props.sentNumber}</p>
                <UserDetail userData={this.myUserData} residence={this.state.residence} />
                <input id='newres'></input>
                <button onClick={this.changeResidence}>Update Residence</button>

            </div>
        )
    }
}

export default User;