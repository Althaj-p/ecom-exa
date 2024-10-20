import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ChatRoom = ({ roomId='1111' }) => {
    console.log(roomId,'roomid')
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const webSocket = useRef(null);  // Store the WebSocket instance

    // Fetch previous messages when the component loads
    // useEffect(() => {
    //     axios.get(`/api/chat/messages/${roomId}`).then((res) => setMessages(res.data));
    // }, [roomId]);

    // Set up the WebSocket connection
    useEffect(() => {
        webSocket.current = new WebSocket(`ws://localhost:8000/ws/chat/${roomId}/`);

        webSocket.current.onopen = () => {
            console.log('WebSocket connected');
        };

        webSocket.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prev) => [...prev, { sender: data.sender, text: data.message }]);
        };

        webSocket.current.onclose = () => {
            console.log('WebSocket disconnected');
        };

        return () => {
            webSocket.current.close();  // Cleanup on unmount
        };
    }, [roomId]);

    const sendMessage = () => {
        if (input.trim()) {
            webSocket.current.send(JSON.stringify({
                message: input,
                sender: 'admin@gmail.com',  // Replace with actual sender username from context
            }));
            setInput('');
        }
    };

    return (
        <div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.sender}: </strong> {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatRoom;
