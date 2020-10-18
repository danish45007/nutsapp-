import React, { useState } from 'react'
import "./ChatFooter.css"
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachmentIcon from '@material-ui/icons/Attachment';
import MicIcon from '@material-ui/icons/Mic';
import axios from "../../Axios";

function ChatFooter({ messages }) {

    const [input, setInput] = useState("")
    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/v1/api/messages/new',{
            "message": input,
            "name": "Danish",
            "timestamp": "1234",
            "received": false
        })
        setInput("")
    }
    return (
        <div className="chat__footer">
            <InsertEmoticonIcon />
            <AttachmentIcon />
            <form>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type a message"
                    type="text"
                />
                <button onClick={sendMessage} type="submit">
                    Send a message
                </button>
            </form>
            <MicIcon />
        </div>
    )
}

export default ChatFooter
