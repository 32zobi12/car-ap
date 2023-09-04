import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {updateNewPostText} from "../../Redux/state";
const MyPosts = (props) => {

    let postElements = props.postData.map( p => < Post message={p.message} LikesCount={p.LikesCount}/>);
    let newPostElements = React.createRef();
    let addPost = () =>{
        let text = newPostElements.current.value;
        props.addPost(text);
        newPostElements.current.value='';
    }
    let onPostChange =() =>{
        let text = newPostElements.current.value;
        props.updateNewPostText(text);
    }
    return (

        <div>
            <div className={s.Blockpost}>
                New post
            </div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElements}  value={props.newPostText}></textarea>
                <div></div>
                <button className={s.addbut} onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElements}

            </div>
        </div>
    )
}
export default MyPosts;