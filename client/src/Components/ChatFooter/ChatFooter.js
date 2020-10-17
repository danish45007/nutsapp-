import React from 'react'
import "./ChatFooter.css"
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachmentIcon from '@material-ui/icons/Attachment';
import MicIcon from '@material-ui/icons/Mic';
function ChatFooter() {
    return (
        <div className="chat__footer">
            <InsertEmoticonIcon />
            <AttachmentIcon />
            <form>
                <input
                    placeholder="Type a message"
                    type="text"
                />
                <button type="submit">
                    Send a message
                </button>
            </form>
            <MicIcon />
        </div>
    )
}

export default ChatFooter
