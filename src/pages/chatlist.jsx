import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Box, Divider, CircularProgress } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const ChatList = () => {
    const [chatRooms, setChatRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Fetch chat rooms the user has participated in
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI5NzczMDI3LCJpYXQiOjE3Mjk3NjU4MjcsImp0aSI6ImZkNDg0YzZiNGUzZjQwYzJhZGY5NGYxOWY0OWUxOWEwIiwidXNlcl9pZCI6MX0.bepAHIk_2tAPJdj14v-CeQtKgeKL05wduUywaNpahS8';
        Axios.get('http://127.0.0.1:8000/api/chat/rooms/',{
            headers: {
                'Authorization': `Bearer ${token}`,  // Add Bearer token here
                'Content-Type': 'application/json',
            },
            // withCredentials: true,
            })  // Adjust API endpoint based on your setup
            .then((response) => {
                console.log(response.data,'responsedata')
                setChatRooms(response.data);
                console.log(chatRooms,'dataroms')
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching chat rooms:', error);
                setLoading(false);
            });
    }, []);
    
    const handleChatOpen = (roomId) => {
        console.log(roomId,'roomId')
        navigate(`/chat/${roomId}`);  // Navigate to the chat room page
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (chatRooms.length === 0) {
        return (
            <Typography variant="h6" align="center" sx={{ mt: 5 }}>
                No active chats found.
            </Typography>
        );
    }

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 3 }}>
            <Typography variant="h5" gutterBottom align="center">
                Chat Support List
            </Typography>
            <List>
                {chatRooms.map((room) => (
                    <React.Fragment key={room.room_id}>
                        <ListItem button onClick={() => handleChatOpen(room.room_id)}>
                            <ListItemAvatar>
                                <Avatar>
                                    <ChatIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={`Support Agent: ${room.support_agent.username}-${room.room_id}`}
                                secondary={`Last message: ${room.last_message || 'No messages yet'}`}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
};

export default ChatList;
