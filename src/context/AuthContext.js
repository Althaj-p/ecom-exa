import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import jwtDecode from 'jwt-decode'; // Import jwt-decode
// import jwt_decode from "jwt-decode"
import { jwtDecode } from 'jwt-decode';  // Named import

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Check if user token exists on app load
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        // if (token) {
        //     setUser({ token });
        // }
        if (token) {
            const decodedUser = jwtDecode(token); // Decode token
            console.log(decodedUser,'decodeduser')
            setUser(decodedUser); // Store user details in state
        }
        setLoading(false);
    }, []);

    const login = (token) => {
        localStorage.setItem('accessToken', token.access);
        localStorage.setItem('refreshToken', token.refresh);
        // setUser({ token: token.access });
        const decodedUser = jwtDecode(token.access); // Decode token
        console.log(decodedUser,'decodeduser')
        setUser(decodedUser); // Store user details in context

        navigate('/');

    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
