import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const username = 'customer'; // You can replace this with dynamic usernames

  useEffect(() => {
    const chatSocket = new WebSocket('ws://127.0.0.1:8000/ws/chat/');

    chatSocket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    return () => chatSocket.close();
  }, []);

  const sendMessage = () => {
    const chatSocket = new WebSocket('ws://127.0.0.1:8000/ws/chat/');
    chatSocket.onopen = () => {
      chatSocket.send(JSON.stringify({
        message,
        username,
      }));
    };
    setMessage('');
  };

  return (
    <div>
      <h2>Customer Support Chat</h2>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.username}: </strong> {msg.message}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
