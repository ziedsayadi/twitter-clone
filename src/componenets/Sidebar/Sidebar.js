import React from 'react';
import "./sidebar.css" ;
import {Twitter,Home,Search,
    NotificationsNone,
    BookmarkBorder,
    ListAlt,
    MailOutline,
    PermIdentity,
    MoreHoriz,
    Send
}  from "@material-ui/icons"
import SidebarOptions from './SidebarOptions';
import {Button} from '@material-ui/core'


const SideBar = () => {
    return (
        <div className="sidebar">
            <Twitter className="twitter_icon"/>
            <SidebarOptions active Icon={Home} text={"Home"} />
            <SidebarOptions Icon={Search} text={"explore"} />
            <SidebarOptions Icon={NotificationsNone} text={"notification"} />
            <SidebarOptions Icon={BookmarkBorder} text={"Bookmarks"} />
            <SidebarOptions Icon={ListAlt} text={"Lists"} />
            <SidebarOptions Icon={MailOutline} text={"Messages"} />
            <SidebarOptions Icon={PermIdentity} text={"Profile"} />
            <SidebarOptions Icon={MoreHoriz} text={"More"} />
            <Button endIcon={<Send/>}  variant="outlined" className="sidebar_btn" fullWidth>Tweet</Button>
        </div>
    );
}
 
 
export default SideBar;