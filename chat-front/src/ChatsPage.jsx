// import React from 'react'
// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced"

// function ChatsPage(props) {
//     const chatProps = useMultiChatLogic(
//         "fdbef42f-374c-46f3-bd8f-a2daeea3cfab",
//          props.user.username,
//          props.user.secret
//          );
//   return (
//     <div style={{height:"100vh"}}>
//         <MultiChatSocket {...chatProps}/>
//         <MultiChatWindow {...chatProps} style={ { height: "100%"} }/>
//     </div>
//   )
// }

// export default ChatsPage

//above is react-chat-engine-pretty

import React from 'react'
import { PrettyChatWindow } from "react-chat-engine-pretty"

function ChatsPage(props) {
   
  return (
    <div style={{height:"100vh"}}>
        <PrettyChatWindow
           projectId= 'fdbef42f-374c-46f3-bd8f-a2daeea3cfab'
           username={props.user.username}
           secret= {props.user.secret}
           style={{height:"100%"}}
        />
    </div>
  )
}

export default ChatsPage