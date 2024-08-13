import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import InputGroup from '../components/Input';
import styles from '../styles/LoginScreen.module.css';
import {Link} from "react-router-dom";
import MailIcon from '../assets/icons/material-symbols_mail.svg';
import PasswordIcon from '../assets/icons/mdi_password.svg'
import StandingImage from '../assets/images/standing-23.png';


const LoginScreen: React.FC = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            setError(null);
            setSuccess('Login successful!');
        } catch (err) {
            setSuccess(null);
            setError('Invalid credentials');
        }
    };


    return (
        <main className={styles.loginScreen}>
            <section className={styles.loginFrame}>
                <div className={styles.contentWrapper}>
                    <div className={styles.loginColumn}>
                        <div className={styles.loginBackground}>
                            <h2 className={styles.loginTitle}>Login</h2>

                            <form className={styles.inputWrapper} onSubmit={handleSubmit}>
                                <InputGroup
                                    icon={MailIcon}
                                    label="Digite seu e-mail..."
                                    type="email"
                                    id="emailInput"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <InputGroup
                                    icon={PasswordIcon}
                                    label="Digite sua senha..."
                                    type="password"
                                    id="passwordInput"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="submit" className={styles.loginButton}>LOGAR</button>
                                {error && <p className={styles.error}>{error}</p>}
                                {success && <p className={styles.success}>{success}</p>}
                            </form>
                            <Link to="/create-account" className={styles.createAccountLink}>
                                <button className={styles.createAccountButton}>CRIAR NOVA CONTA</button>
                            </Link></div>
                    </div>
                    <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                            <img loading="lazy" src={StandingImage} className={styles.decorativeImage} alt="Decorative standing figure" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LoginScreen;
