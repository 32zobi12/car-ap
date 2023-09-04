import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import CarTable from './components/CarTable/CarTable';
import User from './components/Login/User';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import UserList from './components/Login/UserList';

const App = (props) => {
    function handleRegistration(username) {
        console.log(`Пользователь ${username} успешно зарегистрирован.`);
    }

    return (
        <div className='app-wrapper'>
            <Header />
            <NavBar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/User/*' element={<User />} />
                    <Route path='/UserList/*' element={<UserList />} />
                    <Route path='/Login/*' element={<Login />} />
                    <Route path='/Register' element={<Register onRegister={handleRegistration} />} /> {/* Убрали слэш после Register */}
                    <Route path='/Car/*' element={<CarTable />} />
                    <Route path='/Profile/*' element={<Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;