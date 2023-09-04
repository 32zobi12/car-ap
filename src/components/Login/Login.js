import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const handleLogin = () => {
        const { username, password } = credentials;

        // Проверка наличия пользователя в LocalStorage
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);

            if (parsedUser.username === username && parsedUser.password === password) {
                onLogin(username);
            } else {
                alert('Neverno');
            }
        } else {
            alert('Netu');
        }
    };

    return (
        <div>
            <h2>Sign in</h2>
            <input
                type="text"
                placeholder="Username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
            />
            <button onClick={handleLogin}>Sign in</button>
        </div>
    );
};

export default Login;