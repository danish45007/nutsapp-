import React, { useState } from 'react'
import { Avatar } from "@material-ui/core"
import "./SidebarChat.css"
import { useEffect } from 'react';

function SidebarChat({ addNewChat }) {
    const [seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    },[])
    return (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat___info">
                <h2>{addNewChat}</h2>
                <p>Last message</p>
            </div>
            <div className="sidebarChat___date">
                <p>6:36 pm</p>
            </div>
        </div>
    )
}

export default SidebarChat
