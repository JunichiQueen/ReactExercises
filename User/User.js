import React, { Component } from 'react';
import UserDetail from './UserDetail';

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
            time: new Date().getHours() + ":" + new Date().getMinutes()
        }
    }
    
    timeClick = () => {
        this.setState({
            time: new Date().getHours() + ":" + new Date().getMinutes()
        });
    }
    myUserData = {
        username: "Max Payne",
        job: "Police Officer",
        age: "35"
    }
    render() {
        return (
            <div>
                <p>user page works1!</p>
                <p>You are visitor number: {this.props.sentNumber}</p>
                <UserDetail userData={this.myUserData} />
                <button 
                    onClick={this.timeClick}>
                    Update Time
                </button>
                <p>Time: {this.state.time.toString()}</p>
            </div>
        )
    }
}

export default User;