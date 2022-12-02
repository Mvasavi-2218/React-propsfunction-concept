import React from 'react'

export default class Events extends React.Component {
    state={
        userName:""
    }
    handleClick=()=>{
        console.log(this.state.userName)
        this.setState({
            userName:""
        })
    }
    handleUser=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
  render() {
    return (
      <div>
        <h1>This is about Events</h1>
        <input 
        value={this.state.userName}
        type="text" 
        placeholder="Enter your Name" 
        name="userName"
        onChange={this.handleUser}/>
        <p><button onClick={this.handleClick}>Submit</button></p>
      </div>
    )
  }
}
