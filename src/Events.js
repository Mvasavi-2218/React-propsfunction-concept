import React from 'react'

export default class Events extends React.Component {
    state={
        userName:"",
        Rollnumber:""
    }
    handleClick=()=>{
        console.log(this.state.userName)
        console.log(this.state.Rollnumber)
        this.setState({
            userName:"",
            Rollnumber:""
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
        onChange={this.handleUser}
        />
        <p><input
        type="text" 
        placeholder="Enter your Rollnumber" 
        name="Rollnumber" 
        value={this.state.Rollnumber}
        onChange={this.handleUser}
        /></p>
        <p><button onClick={this.handleClick}>Submit</button></p>
      </div>
    )
  }
}
