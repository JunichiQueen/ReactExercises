import React, { Component } from 'react';
import './App.css';
import User from './User/User.js';
import MyComponent from './Component/MyComponent.js';

// class App extends Component {
//   number = 4;
//   render() {
//     return (
//       <div>
//         <h1>User</h1>
//         <User onRender={() => this.whenSubRender()}/>
//       </div>
      
//     );
//   }
//   whenSubRender() {
//     console.log('sub component rendered');
//   }
// }

class App extends Component {
  number = 4;
  render() {
    return (
      <div>
        <h1>User</h1>
        <User sentNumber={this.number}/>
        <MyComponent />
      </div>
      
    );
  }
}



export default App;

