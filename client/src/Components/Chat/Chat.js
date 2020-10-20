import React from 'react';
import './Chat.css'
import { Avatar,IconButton } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ChatBody from '../ChatBody/ChatBody';
import ChatFooter from '../ChatFooter/ChatFooter';

function Chat({messages}) {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src="https://avatars.dicebear.com/api/human/123.svg" />
                <div className="chat__headerInfo">
                    <h3>Aditya</h3>
                    <p>Last seen...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            {/*Chat Body*/}
            <ChatBody messages={messages} />
            {/*Chat Footer*/}
            <ChatFooter messages={messages}/>
        </div>
    )
}

export default Chat
