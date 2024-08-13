import React, { useState } from 'react';
import styles from '../styles/InputGroup.module.css';

interface InputGroupProps {
    icon: string;
    label: string;
    type: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({ icon, label, type, id, value, onChange }) => {
    const [inputType, setInputType] = useState(type);

    const toggleVisibility = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    };

    return (
        <>
            <div className={styles.inputGroup}>
                <img loading="lazy" src={icon} className={styles.inputIcon} alt="" />
                <label htmlFor={id} className={styles.visuallyHidden}>{label}</label>
                <input
                    type={inputType}
                    id={id}
                    placeholder={label}
                    className={styles.inputLabel}
                    aria-label={label}
                    value={value}
                    onChange={onChange}
                />
                {type === 'password' && (
                    <button type="button" className={styles.visibilityToggle} onClick={toggleVisibility}>
                        {inputType === 'password' ? 'Show' : 'Hide'}
                    </button>
                )}
            </div>
            <div className={styles.inputDivider} />
        </>
    );
};

export default InputGroup;
