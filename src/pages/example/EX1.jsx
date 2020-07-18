import React, { Component } from 'react'

/**
 * React { }  用法类似于  VUE 中{{ }} ， v-bind 
 */
class EX1 extends Component{
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
        <div>被忽略的：{true}</div>
        {/* <div>被忽略的：{String(true)}</div> */}
      </h1>
    )

  }
}

export default EX1