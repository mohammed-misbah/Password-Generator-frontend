import React, { useState } from 'react';
import Navbar from "./Navbar";
import styles from '../template/PasswordForm.module.css';
import axios from '../utils/axios'
import { useNavigate } from 'react-router-dom';


const PasswordGenerator = () => {
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(9);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const navigate = useNavigate();

    const handleGeneratePassword = (e) => {
        e.preventDefault();
        axios
             .post("api/generate/", {
                length: passwordLength,
                includeUppercase,
                includeLowercase,
                includeNumbers,
                includeSymbols
             })
             .then((response) => {
                console.log("Response is",response);
                setGeneratedPassword(response.data.password);
             })
             .catch(error => {
                console.error("Error generating password", error)
             });
    };
    const handleCopyPassword = () => {
        navigator.clipboard.writeText(generatedPassword).then(() => {
            alert('Password copied to clipboard!');
        });
    };

    return (
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.passwordGeneratorContainer}>
                <h1>PASSWORD GENERATOR</h1>
                <div className={styles.formControl}>
                    <label>Password Length: {passwordLength}</label>
                    <input type="range" min="6" max="20" value={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} />
                </div>
                <div className={styles.formControl}>
                    <label><input type="checkbox" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} /> Uppercase</label>
                    <label><input type="checkbox" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} /> Lowercase</label>
                    <label><input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} /> Numbers</label>
                    <label><input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} /> Symbols</label>
                </div>
                <button onClick={handleGeneratePassword}>Generate</button>
                {generatedPassword && (
                <div className={styles.generatedPasswordDisplay}>
                    <input type="text" value={generatedPassword} readOnly />
                    <button onClick={handleCopyPassword}>Copy</button>
                    <button onClick={() => navigate('/home')}>Go to Home</button>
                </div>
            )}
            </div>
        </div>
    );
};

export default PasswordGenerator;







{/* <div className={styles.formControl}>
    <label>Username</label>
    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
</div> */}
