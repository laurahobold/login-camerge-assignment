import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import InputGroup from '../components/Input';
import styles from '../styles/CreateAccount.module.css';
import MailIcon from '../assets/icons/material-symbols_mail.svg';
import PasswordIcon from '../assets/icons/mdi_password.svg'
import StandingImage from '../assets/images/standing-6.png';

const CreateAccount: React.FC = () => {
    const { signup } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            await signup(email, password);
            setError(null);
            setSuccess('Account created successfully!');
        } catch (err) {
            setSuccess(null);
            setError('Sign-up failed');
        }
    };

    return (
        <main className={styles.createAccount}>
            <section className={styles.createAccountFrame}>
                <div className={styles.contentWrapper}>
                    <div className={styles.createAccountColumn}>
                        <div className={styles.createAccountBackground}>
                            <h2 className={styles.createAccountTitle}>Criar uma conta</h2>
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
                                <InputGroup
                                    icon={PasswordIcon}
                                    label="Confirme sua senha..."
                                    type="password"
                                    id="confirmPasswordInput"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <button type="submit" className={styles.createAccountButton}>Criar nova conta</button>
                                {error && <p className={styles.error}>{error}</p>}
                                {success && <p className={styles.success}>{success}</p>}
                        </form>
                            <Link to="/" className={styles.backToLoginLink}>
                                <button className={styles.backToLoginButton}>VOLTAR AO LOGIN</button>
                            </Link>
                        </div>
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

export default CreateAccount;
