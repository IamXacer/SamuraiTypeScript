import React from "react";
import s from "../Profile.module.css";
import {MyPosts} from "../MyPosts/MyPosts";

export const ProfileInfo = () => {
    return (
        <div className={s.profileWrapperContent}>

            <div><img src='https://cs12.pikabu.ru/post_img/big/2020/05/12/9/1589296651155220841.jpg'/></div>
            <div>Ava+description</div>

        </div>
    )

}