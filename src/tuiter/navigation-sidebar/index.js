import React from "react";

const NavigationSidebar = (
 {
   active = 'explore'
 }
) => {
  return(
   <div className="list-group">
     <a className="list-group-item" href="">Tuiter</a>
     <a className={`list-group-item
                    ${active === 'home'?'active':''}`} href="./home.html">
       Home
     </a>
     <a className={`list-group-item
                    ${active === 'explore'?'active':''}`} href="./explore.html">
       Explore
     </a>
     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`} href="./notifications.html">
       Notifications
     </a>
     <a className={`list-group-item
                    ${active === 'messages'?'active':''}`} href="./messages.html">
       Messages
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`} href="./bookmarks.html">
       Bookmarks
     </a>
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`} href="./list.html">
       Lists
     </a>
     <a className={`list-group-item
                    ${active === 'profile'?'active':''}`} href="./profile.html">
       Profile
     </a>
     <a className={`list-group-item
                    ${active === 'more'?'active':''}`} href="./more.html">
       More
     </a>
   </div>
  );
};
export default NavigationSidebar;
