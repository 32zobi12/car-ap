import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import Profileinfo from './profileinfo/Profileinfo.jsx';
import {addPost} from "../Redux/state";

const Profile = (props) => {

    return (
            <div>
                <Profileinfo />
                <MyPosts postData={props.state.postData} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
            </div>
    )
}
export default Profile;