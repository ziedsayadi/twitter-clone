import React, { useState } from 'react';
import "./tweetbox.css";
import {Avatar, Button, TextField} from "@material-ui/core";
import {Image,Send ,EmojiEmotions,Poll,Event} from '@material-ui/icons';
import db from '../../firebase';

const Tweetbox = () => {
   const [message, setMessage] = useState('');
   const [url, setUrl] = useState('');
   const postSubmit =e=>{
     e.preventDefault();
     db.collection('post').add({
      avatar:"https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/78595234_2862705107076003_9196636007171096576_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=zD7_3qrSuy0AX_BkDTq&_nc_ht=scontent.ftun2-1.fna&oh=39b54c955dc79ba8269a4af8dffb14a8&oe=5FADA29D",
      username :"marwen",
      displayName :"Zied Sayaydi",
      verified:true,
      text :message,
      image: url
     })
     setMessage('');
     setUrl('')
   }
    return (
        <div className="tweet_box">
            <form active="">
                <div className="input_control">
                <Avatar className='avatar' src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/78595234_2862705107076003_9196636007171096576_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=zD7_3qrSuy0AX_BkDTq&_nc_ht=scontent.ftun2-1.fna&oh=39b54c955dc79ba8269a4af8dffb14a8&oe=5FADA29D"/>
                <TextField 
                value={message}
                onChange={e=>setMessage(e.target.value)}
                className='input' 
                type="text" 
                variant="filled" 
                placeholder="what's up bruh" color="primary" />
                </div>
                <div className="inputupload_controll">
                <div className="input-container">
                <Button 
                disabled="true"
                className="upload_btn"
                component="span">
                  <Image className="icon_style"/>
                 </Button>
                <input
                  value ={url}
                  onChange={e=>setUrl(e.target.value)}
                  id="upload-photo"
                  placeholder="Enter an image/ved URl"
                  name="upload-photo"
                  type="text"
                 />
                </div>
                <Button
                onClick={postSubmit}
                type="submit"
                className="tweet_box_btn"
                endIcon={<Send/>} 
                variant="contained" color="primary">Tweet</Button>
                </div>
            </form>
        </div>
    )
}

export default Tweetbox
