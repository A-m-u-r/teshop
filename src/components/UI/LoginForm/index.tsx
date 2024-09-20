"use client"
import React, {useState} from 'react';
import styles from './style.module.css'
import axios from "axios";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const {login, registration} = useStore();

    const test = () => {
        axios.post('http://213.171.15.22:8000/api/v1/auth/users/', {
            email: email,
            password: password,
            phone: phone
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <input
                className={styles.input}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                className={styles.input}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="text"
                placeholder='Password'
            />
            <input
                className={styles.input}
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="text"
                placeholder='Phone'
            />
            <button onClick={() => login(email, password)}>Login</button>
            <button onClick={() => registration(email, password, phone)}>Reg</button>
            <button onClick={() => test()}>test</button>
        </div>
    );
};

export default LoginForm;