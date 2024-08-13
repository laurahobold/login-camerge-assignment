import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginScreen from './pages/Login';
import CreateAccount from './pages/CreateAccount';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
    );
};

export default App;
