import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from "axios";

const API_URL = 'http://localhost:5000/users';

interface AuthContextType {
    user: any;
    login: (email: string, password: string) => Promise<void>;
    signup: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<any>(null);

    const login = async (email: string, password: string) => {
        const response = await axios.get(API_URL, {
            params: { email, password }
        });

        if (response.data.length > 0) {
            setUser(response.data[0]);
        } else {
            throw new Error('Invalid credentials');
        }
    };

    const signup = async (email: string, password: string) => {
        const checkResponse = await axios.get(API_URL, {
            params: { email }
        });

        if (checkResponse.data.length > 0) {
            throw new Error('Email already exists');
        }

        // Create a new user
        const response = await axios.post(API_URL, {
            email,
            password
        });

        setUser(response.data);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
