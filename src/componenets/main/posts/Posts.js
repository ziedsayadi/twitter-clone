import React,{forwardRef} from 'react'
import {Avatar} from "@material-ui/core";
import {VerifiedUser,ChatBubble,Repeat,Favorite,Publish} from "@material-ui/icons"
import "./posts.css"
const Posts = forwardRef(({
    avatar,
    username,
    displayName,
    verified,
    text,
    image   
},ref) =>{
    return (
        <>
        <div className="post" ref={ref}>
            <div className="post_header">
                <div className="post_header_info" >
                <div className="post_avatar">
                <Avatar className='avatar_post' src={avatar}/>
                </div>
                <div className="post_info_text&descrip">
                <div className="post_header_text">
                    {displayName}  <span>
                      { verified &&  <VerifiedUser 
                        className="post_badge"/>}@{username}
                    </span>
                </div>
                <div className="post_discription">
                    <p>{text}</p>
                </div>
                </div>
                </div>
                <div className="post_img">
                    <img src={image}/>
                </div>
            </div>
        </div>
        <div className="post_footer" >
                <ChatBubble className="post_footer_icons" fontSize="small" />
                <Favorite className="post_footer_icons" fontSize="small" />
                <Repeat className="post_footer_icons" fontSize="small" />
                <Publish className="post_footer_icons" fontSize="small" />
            </div>
        </>
    )
}
)
export default Posts
