import React from 'react';
import s from './../Profile.module.css';
const Profileinfo = (props) => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.img}
                     src='https://oir.mobi/uploads/posts/2022-08/1661384701_4-oir-mobi-p-fon-trenazhernii-zal-oboi-4.jpg'/>
            </div>
            <div className={s.snow}>
                <img className={s.img}
                     src='https://media.tenor.com/UeD65UfM2wYAAAAC/winter-anime.gif'/>
            </div>
            <div className={s.tet}>#Secret</div>
        </div>
    )
}
export default Profileinfo;