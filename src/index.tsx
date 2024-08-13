
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';
import CreateAccount from "./pages/CreateAccount";

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/create-account" element={<CreateAccount />} />
                </Routes>
            </Router>
        </AuthProvider>
    </React.StrictMode>
);
