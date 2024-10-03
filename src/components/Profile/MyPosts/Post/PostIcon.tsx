import React from "react";
import s from "./Posts.module.css";
import facebookSVG from "../../../img/facebookSVG.svg";

export const PostIcon = () => {
    return (
        <div>
            <div className={s.imgClas}>
                <ul className={s.social}>

                    <li className={`${s.social_item} ${s.facebook}`}>
                        {/*   <Icon name="arrow-down" color="#FFFFFF" size={35} />*/}
                        <>
                            <svg width={30} height={30} className="social__img ">
                                <use href={`${facebookSVG}#f`}></use>
                            </svg>
                            {/*<img src={facebookSVG}/>*/}
                        </>
                    </li>
                    <li className={`${s.social_item} ${s.vk}`}>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/WhatsApp_font_awesome.svg/1024px-WhatsApp_font_awesome.svg.png'/>
                    </li>
                    <li className={`${s.social_item} ${s.twiter}`}>
                        <img src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/twitter-512.png'/>
                    </li>

                    <li className={`${s.social_item} ${s.insagramm}`}>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Font_Awesome_5_brands_instagram.svg/1200px-Font_Awesome_5_brands_instagram.svg.png'/>
                    </li>
                    <li className={`${s.social_item} ${s.google}`}>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Font_Awesome_5_brands_google-plus-g.svg/1279px-Font_Awesome_5_brands_google-plus-g.svg.png'/>
                    </li>

                </ul>
            </div>
        </div>

    )
}