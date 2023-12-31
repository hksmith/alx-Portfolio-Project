import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        "883fd4c4-4217-489a-b4e3-ab71a051788d", 
        props.user.username, 
        props.user.secret
        );
    return( 
## integrating the given user interface from chatengine
    <div style={{ height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>)
}

export default ChatsPage
