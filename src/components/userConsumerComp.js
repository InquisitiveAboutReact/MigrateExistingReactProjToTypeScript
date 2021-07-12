import React from "react"
import {UserConsumer} from "./userContext"

function userConsumerComp() {
    return (
        <UserConsumer>
        
        {
            userName=> {
                return <h3> User Consumer nested Component to get the value from App parent Level: {userName}</h3>
            }
        }
           
        
        </UserConsumer>
        
    )
}

export default userConsumerComp
