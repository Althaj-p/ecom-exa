import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { 
    Box, 
    TextField, 
    Button, 
    Typography, 
    Paper, 
    Avatar, 
    AppBar, 
    Toolbar, 
    Grid, 
    IconButton, 
    Divider 
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { AuthContext } from '../context/AuthContext';

const ChatRoom = () => {
    const { roomId } = useParams();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const webSocket = useRef(null);
    const messageEndRef = useRef(null);
    const { user } = useContext(AuthContext);

    const userEmail = user ? user.user_id : '';
    const userProfilePic = user?.profile_picture || 'https://via.placeholder.com/40';
    const token = localStorage.getItem('accessToken');

    // Fetch previous messages
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

    // WebSocket setup
    useEffect(() => {
        webSocket.current = new WebSocket(`ws://localhost:8000/ws/chat/${roomId}/`);
        webSocket.current.onopen = () => console.log('WebSocket connected');
        webSocket.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prev) => [...prev, { sender: data.sender, message: data.message, profilePic: data.profilePic }]);
        };
        webSocket.current.onclose = () => console.log('WebSocket disconnected');
        return () => webSocket.current.close();
    }, [roomId]);

    const sendMessage = () => {
        if (input.trim()) {
            webSocket.current.send(JSON.stringify({
                message: input,
                sender: userEmail,
                profilePic: userProfilePic,
            }));
            setInput('');
        }
    };

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <Box
            sx={{
                height: '100vh',
                backgroundImage: 'url(https://source.unsplash.com/1600x900/?abstract,chat)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: 2,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '600px',
                    bgcolor: 'rgba(255, 255, 255, 0.85)',
                    borderRadius: 4,
                    boxShadow: 3,
                    overflow: 'hidden',
                }}
            >
                <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Chat Room: {roomId}
                        </Typography>
                        <Avatar src={userProfilePic} />
                    </Toolbar>
                </AppBar>

                <Grid container sx={{ p: 2, maxHeight: 400, overflowY: 'auto' }}>
                    {messages.map((msg, index) => (
                        <Box key={index} sx={{ mb: 2, width: '100%' }}>
                            <Grid
                                container
                                alignItems="flex-start"
                                justifyContent={
                                    msg.sender === userEmail ? 'flex-end' : 'flex-start'
                                }
                            >
                                {msg.sender !== userEmail && (
                                    <Avatar
                                        src={msg.profilePic || 'https://via.placeholder.com/40'}
                                        sx={{ mr: 1 }}
                                    />
                                )}
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 2,
                                        backgroundColor: msg.sender === userEmail ? '#2196f3' : '#e0e0e0',
                                        color: msg.sender === userEmail ? '#fff' : '#000',
                                        borderRadius: 2,
                                        maxWidth: '70%',
                                    }}
                                >
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                        {msg.sender}
                                    </Typography>
                                    <Typography variant="body1">{msg.message}</Typography>
                                </Paper>
                                {msg.sender === userEmail && (
                                    <Avatar
                                        src={msg.profilePic || 'https://via.placeholder.com/40'}
                                        sx={{ ml: 1 }}
                                    />
                                )}
                            </Grid>
                        </Box>
                    ))}
                    <div ref={messageEndRef} /> {/* Scroll anchor */}
                </Grid>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                    <TextField
                        fullWidth
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        variant="outlined"
                    />
                    <IconButton onClick={sendMessage} color="primary" sx={{ ml: 1 }}>
                        <SendIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default ChatRoom;
