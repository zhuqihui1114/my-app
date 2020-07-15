import React, { Component } from 'react'

class HelloWorld extends Component{
  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  render () {

    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };
    
    return (
      <h1>
        Hello, {this.formatName(user)}!
      </h1>
    )
  }
}

export default HelloWorld