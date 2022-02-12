import React, { Component } from 'react'

export class Example extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn:true
        }
    }
    
    render() {
        // return this.state.isLoggedIn ?(
        //     <div>Welcome</div>
        // ):(
        //     <div>Bye</div>
        // )
       return this.state.isLoggedIn && <div> Welcome</div>
    }
}

export default Example