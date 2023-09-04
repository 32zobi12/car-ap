import React from 'react';
import s from './Post.module.css'
const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://5mod.ru/uploads/posts/2022-12/1671178636_n0.jpg' />
                { props.message }
                <div>
                    <span className='Like'>Like</span> { props.LikesCount }
                </div>
            </div>
        </div>
    )
}
export default Post;