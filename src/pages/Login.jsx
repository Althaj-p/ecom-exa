// import React, { useState, useContext } from 'react';
// import { TextField, Button, Box, Typography, Paper } from '@mui/material';
// import { AuthContext } from '../context/AuthContext';
// import { loginUser } from '../services/authService';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);
//     const { login } = useContext(AuthContext);  // Use AuthContext

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const tokens = await loginUser({ email, password });
//             login(tokens);  // Call login function from context
//         } catch (err) {
//             setError(err.detail || 'Invalid credentials');
//         }
//     };

//     return (
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
//             <Paper sx={{ p: 4, width: 400 }}>
//                 <Typography variant="h5" gutterBottom>Login</Typography>
//                 {error && <Typography color="error">{error}</Typography>}
//                 <form onSubmit={handleLogin}>
//                     <TextField
//                         fullWidth
//                         margin="normal"
//                         label="Email"
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <TextField
//                         fullWidth
//                         margin="normal"
//                         label="Password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
//                         Login
//                     </Button>
//                 </form>
//             </Paper>
//         </Box>
//     );
// };

// export default Login;
import React, { useState, useContext } from 'react';
import { TextField, Button, Box, Typography, Card, CardContent, IconButton, InputAdornment } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { loginUser } from '../services/authService';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const tokens = await loginUser({ email, password });
            login(tokens);
        } catch (err) {
            setError(err.detail || 'Invalid credentials');
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: '#f0f2f5' }}>
            <Card sx={{ width: 380, boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                    <Typography variant="h5" textAlign="center" color="primary" gutterBottom>
                        Welcome Back
                    </Typography>
                    <Typography variant="body2" textAlign="center" color="textSecondary" gutterBottom>
                        Please login to your account
                    </Typography>
                    {error && (
                        <Typography color="error" textAlign="center" sx={{ mt: 1 }}>
                            {error}
                        </Typography>
                    )}
                    <form onSubmit={handleLogin} style={{ marginTop: 16 }}>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailOutlinedIcon color="action" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOutlinedIcon color="action" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, py: 1.2, fontWeight: 'bold' }}>
                            Login
                        </Button>
                    </form>
                    <Typography variant="body2" textAlign="center" sx={{ mt: 2, color: 'text.secondary' }}>
                        Forgot Password?
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Login;
