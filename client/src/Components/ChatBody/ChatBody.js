import React from 'react'
import "./ChatBody.css"


function ChatBody() {
    return (
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
    )
}

export default ChatBody
