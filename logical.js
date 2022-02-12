import React, { Component } from 'react'

class Logical extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:''
        }
    }
    handleUsernameChange=event=>{
        this.setState({
            username:event.target.value
        })
    }
    handlePasswordChange=event=>{
        this.setState({
            password:event.target.value
        })
    }
    handleSubmit=event=>{
        alert(`${this.state.username} ${this.state.password}`)
        event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
            </div>
            <div>
                <label>Password</label>
                <input type="text" value={this.state.password} onChange={this.handlePasswordChange}/>
            </div>
            <button>Submit</button>
            </form>
        )
    }
}

export default Logical
