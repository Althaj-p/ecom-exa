// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import {useParams} from 'react-router-dom';
// const ChatRoom = () => {
//     const {roomId} = useParams();
//     console.log(roomId,'roomid')
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
//     const webSocket = useRef(null);  // Store the WebSocket instance

//     // Fetch previous messages when the component loads
//     useEffect(() => {
//         const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI5NzczMDI3LCJpYXQiOjE3Mjk3NjU4MjcsImp0aSI6ImZkNDg0YzZiNGUzZjQwYzJhZGY5NGYxOWY0OWUxOWEwIiwidXNlcl9pZCI6MX0.bepAHIk_2tAPJdj14v-CeQtKgeKL05wduUywaNpahS8';
//         axios.get(`http://127.0.0.1:8000/api/chat/messages/${roomId}`,{
//             headers: {
//                 'Authorization': `Bearer ${token}`,  // Add Bearer token here
//                 'Content-Type': 'application/json',
//             },
//             // withCredentials: true,
//             }).then((res) => setMessages(res.data));
//     }, [roomId]);

//     // Set up the WebSocket connection
//     useEffect(() => {
//         webSocket.current = new WebSocket(`ws://localhost:8000/ws/chat/${roomId}/`);

//         webSocket.current.onopen = () => {
//             console.log('WebSocket connected');
//         };

//         webSocket.current.onmessage = (event) => {
//             const data = JSON.parse(event.data);
//             setMessages((prev) => [...prev, { sender: data.sender, message: data.message }]);
//         };

//         webSocket.current.onclose = () => {
//             console.log('WebSocket disconnected');
//         };

//         return () => {
//             webSocket.current.close();  // Cleanup on unmount
//         };
//     }, [roomId]);

//     const sendMessage = () => {
//         if (input.trim()) {
//             webSocket.current.send(JSON.stringify({
//                 message: input,
//                 sender: 'admin@gmail.com',  // Replace with actual sender username from context
//             }));
//             setInput('');
//         }
//     };

//     return (
//         <div>
//             <div className="chat-messages">
//                 {messages.map((msg, index) => (
//                     <div key={index}>
//                         <strong>{msg.sender}: </strong> {msg.message}
//                     </div>
//                 ))}
//             </div>
//             <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Type your message..."
//             />
//             <button onClick={sendMessage}>Send</button>
//         </div>
//     );
// };

// export default ChatRoom;
// ==============================================================================
// import React, { useState, useEffect, useRef, useContext } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Box, TextField, Button, Typography, Paper, Avatar } from '@mui/material';
// import { AuthContext } from '../context/AuthContext';  // Assuming you have an AuthContext

// const ChatRoom = () => {
//     const { roomId } = useParams();
//     const { user } = useContext(AuthContext);  // Get the logged-in user from AuthContext
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
//     const webSocket = useRef(null);
//     const messageEndRef = useRef(null);  // For scrolling to the bottom

//     // Fetch previous messages when the component loads
//     useEffect(() => {
//         axios.get(`http://127.0.0.1:8000/api/chat/messages/${roomId}`, {
//             headers: {
//                 'Authorization': `Bearer ${localStorage.getItem('token')}`,  // Replace with actual token handling
//                 'Content-Type': 'application/json',
//             },
//         }).then((res) => setMessages(res.data));
//     }, [roomId]);

//     // Set up WebSocket connection
//     useEffect(() => {
//         webSocket.current = new WebSocket(`ws://localhost:8000/ws/chat/${roomId}/`);

//         webSocket.current.onopen = () => console.log('WebSocket connected');
//         webSocket.current.onmessage = (event) => {
//             const data = JSON.parse(event.data);
//             setMessages((prev) => [...prev, { sender: data.sender, message: data.message }]);
//         };
//         webSocket.current.onclose = () => console.log('WebSocket disconnected');

//         return () => webSocket.current.close();
//     }, [roomId]);

//     const sendMessage = () => {
//         if (input.trim()) {
//             webSocket.current.send(JSON.stringify({
//                 message: input,
//                 sender: user.email,  // Use logged-in user email as sender
//             }));
//             setInput('');
//         }
//     };

//     // Scroll to the bottom whenever messages change
//     useEffect(() => {
//         messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//     }, [messages]);

//     return (
//         <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5, p: 2 }}>
//             <Paper elevation={3} sx={{ p: 2, maxHeight: 400, overflowY: 'auto' }}>
//                 {messages.map((msg, index) => (
//                     <Box
//                         key={index}
//                         sx={{
//                             display: 'flex',
//                             justifyContent: msg.sender === user.email ? 'flex-end' : 'flex-start',
//                             mb: 1,
//                         }}
//                     >
//                         <Box
//                             sx={{
//                                 bgcolor: msg.sender === user.email ? '#2196f3' : '#e0e0e0',
//                                 color: msg.sender === user.email ? '#fff' : '#000',
//                                 px: 2,
//                                 py: 1,
//                                 borderRadius: 2,
//                                 maxWidth: '70%',
//                             }}
//                         >
//                             <Typography variant="body2">
//                                 <strong>{msg.sender}</strong>
//                             </Typography>
//                             <Typography variant="body1">{msg.message}</Typography>
//                         </Box>
//                     </Box>
//                 ))}
//                 <div ref={messageEndRef} />  {/* Scroll anchor */}
//             </Paper>

//             <Box sx={{ display: 'flex', mt: 2 }}>
//                 <TextField
//                     fullWidth
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     placeholder="Type your message..."
//                     variant="outlined"
//                 />
//                 <Button onClick={sendMessage} variant="contained" sx={{ ml: 2 }}>
//                     Send
//                 </Button>
//             </Box>
//         </Box>
//     );
// };

// export default ChatRoom;
// =============================================================================================
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const ChatRoom = () => {
    const { roomId } = useParams();  // Get the roomId from the URL params
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const webSocket = useRef(null);
    const messageEndRef = useRef(null);  // For auto-scrolling to the latest message

    // const userEmail = localStorage.getItem('userEmail');  // Assuming user's email is saved in localStorage
    // const token = localStorage.getItem('token');  // Assuming token is stored in localStorage
    const userEmail = 'admin@gmail.com';  // Assuming user's email is saved in localStorage
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI5NzczMDI3LCJpYXQiOjE3Mjk3NjU4MjcsImp0aSI6ImZkNDg0YzZiNGUzZjQwYzJhZGY5NGYxOWY0OWUxOWEwIiwidXNlcl9pZCI6MX0.bepAHIk_2tAPJdj14v-CeQtKgeKL05wduUywaNpahS8';  // Assuming token is stored in localStorage

    // Fetch previous messages when the component loads
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/chat/messages/${roomId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .then((res) => setMessages(res.data))
        .catch((error) => console.error('Failed to load messages', error));
    }, [roomId, token]);

    // Set up WebSocket connection
    useEffect(() => {
        webSocket.current = new WebSocket(`ws://localhost:8000/ws/chat/${roomId}/`);

        webSocket.current.onopen = () => console.log('WebSocket connected');
        webSocket.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prev) => [...prev, { sender: data.sender, message: data.message }]);
        };
        webSocket.current.onclose = () => console.log('WebSocket disconnected');

        return () => webSocket.current.close();  // Clean up on component unmount
    }, [roomId]);

    const sendMessage = () => {
        if (input.trim()) {
            webSocket.current.send(JSON.stringify({
                message: input,
                sender: userEmail,  // Use the logged-in user's email as the sender
            }));
            setInput('');
        }
    };

    // Scroll to the bottom when new messages arrive
    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5, p: 2 }}>
            <Paper elevation={3} sx={{ p: 2, maxHeight: 400, overflowY: 'auto' }}>
                {messages.map((msg, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: msg.sender === userEmail ? 'flex-end' : 'flex-start',
                            mb: 1,
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: msg.sender === userEmail ? '#2196f3' : '#e0e0e0',
                                color: msg.sender === userEmail ? '#fff' : '#000',
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                                maxWidth: '70%',
                            }}
                        >
                            <Typography variant="body2">
                                <strong>{msg.sender}</strong>
                            </Typography>
                            <Typography variant="body1">{msg.message}</Typography>
                        </Box>
                    </Box>
                ))}
                <div ref={messageEndRef} />  {/* Scroll anchor */}
            </Paper>

            <Box sx={{ display: 'flex', mt: 2 }}>
                <TextField
                    fullWidth
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    variant="outlined"
                />
                <Button onClick={sendMessage} variant="contained" sx={{ ml: 2 }}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default ChatRoom;
