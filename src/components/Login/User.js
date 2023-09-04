import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import UserList from './UserList';

import './User.css';

function User() {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // «агрузка данных о пользовател€х из LocalStorage при монтировании компонента
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    const handleLogin = (username) => {
        setLoggedInUser(username);
    };

    const handleRegister = (username) => {
        setLoggedInUser(username);
        // ƒобавление нового пользовател€ в состо€ние и LocalStorage
        const newUser = { username };
        setUsers((prevUsers) => {
            const updatedUsers = [...prevUsers, newUser];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return updatedUsers;
        });
    };

    return (
        <div>
            

            <Login onLogin={handleLogin} />
            <Register onRegister={handleRegister} />
            {loggedInUser && (
                <div>
                    <p>You signed in as {loggedInUser}</p>
                    {/* ќбновление UserList после добавлени€ пользовател€ */}
                    <UserList users={users} />
                </div>
            )}
        </div>
    );
}

export default User;