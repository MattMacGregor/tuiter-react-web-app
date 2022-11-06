import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {changeActive} from "../reducers/active-reducer";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faHashtag, faStarOfLife, faBell, faEnvelope, faBookmark, faRectangleList, faUser, faEllipsis } from '@fortawesome/free-solid-svg-icons'


const NavigationSidebar = () => {
  const active = useSelector(state => state.active)
  const dispatch = useDispatch();
  return(
   <div className="list-group">
     <a className="list-group-item" href="./tuiter.html">Tuiter</a>
     <Link className={`list-group-item
                    ${active === 'home'?'active':''}`} to="./" onClick={() => dispatch(changeActive("home"))}>
       <FontAwesomeIcon icon={faHouse} /> Home
     </Link>
     <Link className={`list-group-item
                    ${active === 'explore'?'active':''}`} to="./explore" onClick={() => dispatch(changeActive("explore"))}>
       <FontAwesomeIcon icon={faHashtag} /> Explore
     </Link>
     <a className={`list-group-item ${active === 'Labs'?'active':''}`} href="/">
        <FontAwesomeIcon icon={faStarOfLife} /> Labs
     </a>
     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`} href="./notifications.html">
        <FontAwesomeIcon icon={faBell} /> Notifications
     </a>
     <a className={`list-group-item
                    ${active === 'messages'?'active':''}`} href="./messages.html">
       <FontAwesomeIcon icon={faEnvelope} /> Messages
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`} href="./bookmarks.html">
        <FontAwesomeIcon icon={faBookmark} /> Bookmarks
     </a>
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`} href="./list.html">
       <FontAwesomeIcon icon={faRectangleList} /> Lists
     </a>
     <a className={`list-group-item
                    ${active === 'profile'?'active':''}`} href="./profile.html">
        <FontAwesomeIcon icon={faUser} /> Profile
     </a>
     <a className={`list-group-item
                    ${active === 'more'?'active':''}`} href="./more.html">
        <FontAwesomeIcon icon={faEllipsis} /> More
     </a>
   </div>
  );
};
export default NavigationSidebar;
