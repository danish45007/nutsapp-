import React from 'react';
import './Chat.css'
import { Avatar,IconButton } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ChatBody from '../ChatBody/ChatBody';
import ChatFooter from '../ChatFooter/ChatFooter';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
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
            <ChatBody />
            {/*Chat Footer*/}
            <ChatFooter />
        </div>
    )
}

export default Chat
