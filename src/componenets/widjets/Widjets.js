import React from 'react';
import "./widjets.css";
import{Search} from "@material-ui/icons"
import {TwitterTweetEmbed,TwitterTimelineEmbed} from "react-twitter-embed"
import { useState } from 'react';




const Widjets = () => {
    const [search, setSearch] = useState("")
    const submitSearch =e=>{
        e.preventDefault();
        const widjetContent = document.querySelector(".widjet_container");
        console.log(widjetContent)
    }
    return (
        <div className="widjet">
            <div className="widjet_search_info">
            <Search onClick={submitSearch} className="widjet_search_icon" />
            <input  
            value={search}
            onChange={e=>setSearch(e.target.value)}
            type="text" placeholder="Search..." 
            className="textfeild_widjet"
            />
          
            </div>
            <h3 style={{textAlign:'center',color:"#292F33"}}>what's up</h3>
            <div className="widjet_container">
                <TwitterTweetEmbed tweetId={"856551177860055040"} />
                <TwitterTimelineEmbed 
                sourceType='profile'
                screenName='SciShow'
                />
            </div>
        </div>
    )
}

export default Widjets
