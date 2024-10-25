import React, { useState, useContext } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { loginUser } from '../services/authService';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { login } = useContext(AuthContext);  // Use AuthContext

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const tokens = await loginUser({ email, password });
            login(tokens);  // Call login function from context
        } catch (err) {
            setError(err.detail || 'Invalid credentials');
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Paper sx={{ p: 4, width: 400 }}>
                <Typography variant="h5" gutterBottom>Login</Typography>
                {error && <Typography color="error">{error}</Typography>}
                <form onSubmit={handleLogin}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                        Login
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default Login;
