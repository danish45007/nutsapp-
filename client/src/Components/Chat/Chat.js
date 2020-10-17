import React from 'react';
import './Chat.css'
import { Avatar,IconButton } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
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
            <div className="chat__body">
            <p className="chat__messgae">
                <span className="chat__name">
                    Madhav
                </span>
                    This is test message
                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
            </p>
            <p className="chat__messgae received__message">
                <span className="chat__name">
                    Madhav
                </span>
                    This is test message2
                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
            </p>
            <p className="chat__messgae">
                <span className="chat__name">
                    Madhav
                </span>
                    This is test
                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
            </p>
        </div>
        </div>
    )
}

export default Chat
