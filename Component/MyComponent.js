import React, { Component } from 'react'
import { string, object } from 'prop-types'

import SubComponent from './SubComponent'


export default class MyComponent extends Component {
  constructor(){
super();
  
  this.state = {
     expanded: false 
    }
  }
  
  // Declare propTypes as static properties as early as possible
  static propTypes = {
    model: object.isRequired,
    title: string
  }

  // Default props below propTypes
  static defaultProps = {
    model: {
      id: 0
    },
    title: 'Your Name'
  }

  // Use fat arrow functions for methods
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.model.save()
  }
  
  handleNameChange = (e) => {
    this.props.model.name = e.target.value
  }
  
  handleExpand = (e) => {
    e.preventDefault()
    this.setState(prevState => ({ expanded: !prevState.expanded }))
  }


  
  render() {
    // Destructure props for readability
    const {
        model,
        title
      } = this.props
      return ( 
        <SubComponent 
          onSubmit={this.handleSubmit} 
          expanded={this.state.expanded} 
          onExpand={this.handleExpand}>
          <div>
            <h1>{title}</h1>
            <input
              type="text"
              value={model.name}
              // onChange={(e) => { model.name = e.target.value }}
              // Avoid creating new closures in the render method- use methods like below
              onChange={this.handleNameChange}
              placeholder="Your Name"/>
          </div>
        </SubComponent>
      )
    }
}

  