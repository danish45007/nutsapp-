import React, { useState} from 'react'
import "./ChatFooter.css"
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import MicIcon from '@material-ui/icons/Mic';
import axios from "../../Axios";
import { IconButton } from '@material-ui/core';

function ChatFooter({ messages }) {

    const [emojiPickerState, SetEmojiPicker] = useState(false);
    const [input, setInput] = useState("")
    
    let emojiPicker;
    if (emojiPickerState) {
        emojiPicker = (
            <Picker
                onSelect={emoji => setInput(input + emoji.native)}
                style={styles.emojiPicker}
            />
        );
    }

    function triggerPicker(event) {
        event.preventDefault();
        SetEmojiPicker(!emojiPickerState);
      }
    
    // posting the inpput message data to server
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
        {emojiPicker}
        <button
          className="emoji__icon"
          onClick={triggerPicker}
        >
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
        </button>
            <AttachmentIcon />
            <form>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type a message"
                    type="text"
                />
                <button onClick={sendMessage} type="submit">
                </button>
            </form>
            <MicIcon />
        </div>
    )
}
export default ChatFooter

const styles = {
    emojiPicker: {
      position: "absolute",
      bottom: 10,
      marginLeft: "200px"
    }
  }
  
