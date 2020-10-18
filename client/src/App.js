import React, { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/Chat/Chat';
import { useEffect } from 'react';
import Pusher from 'pusher-js';
import axios from './Axios';

function App() {

  const [message, setMessage] = useState([]);

  // getting inital message info from the DB
  useEffect(() => {
    axios.get('/v1/api/messages/sync').then((response) => {
      setMessage(response.data)
    })
  }, [])

  // getting the real-time messages from the pusher
  useEffect(() => {
    var pusher = new Pusher('6ce87397124b08634e68', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('Message');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(newMessage));
      setMessage([...message, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [message])
  console.log(message);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
