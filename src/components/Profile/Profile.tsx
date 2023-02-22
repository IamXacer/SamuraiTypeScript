import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
  return (
      <div className={s.content}>

          <div><img src='https://cdn.mwallpapers.com/photos/wallpapers/anime/sky-anime-4k-hd-desktop-wallpaper-for-wide-ultra-widescreen-android-iphone-hd-wallpaper-background-downloadhd-wallpapers-desktop-background-android-iphone-1080p-4k-wvpgk.jpg'/></div>
          <div>Ava+description</div>
          <MyPosts/>
             </div>
  )
}