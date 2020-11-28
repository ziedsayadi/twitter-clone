import React, { useEffect, useState } from 'react';
import Tweetbox from './tweetbox/Tweetbox';
import "./main.css";
import FlipMove from "react-flip-move";
import Posts from './posts/Posts';
import db from '../firebase'

const Main = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('post').onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(docs=>docs.data()))
        })
    }, [])
    
    return (
        <div className="main">
             <div className="main_header">
            <h3>Home</h3>
            </div>
            <Tweetbox/>
            <FlipMove>
            {posts.map(post=>
            (     
            <Posts 
            key={post.id}
            avatar={post.avatar}
            username={post.username}
            displayName={post.displayName}
            verified = {post.verified}
            text={post.text}
            image={post.image}
            />
                )
            )}
            </FlipMove>
           
        </div>
    )
}

export default Main
