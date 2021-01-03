import React from "react";
import "./ChatBody.css";

function ChatBody({ messages }) {
  return (
    <div className="chat__body">
      {messages.map((message, i) => (
        <p
          key={i}
          className={`chat__message ${message.received && "received__message"}`}
        >
          <span className="chat__name">{message.name}</span>
          {message.message}
          <span className="chat__timestamp">{message.timestamp}</span>
        </p>
      ))}
    </div>
  );
}

export default ChatBody;
