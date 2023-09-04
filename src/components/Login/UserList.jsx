import React from 'react';

const UserList = ({ users }) => {
    const userListItems = users.map((user, index) => (
        <li key={index}>{user.username}</li>
    ));

    return (
        <div>
            <h2>Users</h2>
            <ul>{userListItems}</ul>
        </div>
    );
};

export default UserList;