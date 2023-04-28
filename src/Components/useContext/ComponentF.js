import React from 'react'
import { UserContext ,ChannelContext} from '../../App'
function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {
          user=>{
            return(
              <ChannelContext.Consumer>
                {
                  channel=>{
                    return <h2>User Context name is {user},Channel Context Value {channel}</h2>
                  }
                  
                }                
              </ChannelContext.Consumer>
            ) 
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF