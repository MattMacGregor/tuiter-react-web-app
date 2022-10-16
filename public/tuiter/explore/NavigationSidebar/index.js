const NavigationSidebar = () => {
 return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <a class="list-group-item" href="home.html"><i class="fa fa-home pt-1 me-2"></i><span class="d-xl-inline d-lg-none d-md-none d-sm-none"> Home</span></a>
<a class="list-group-item active" href="explore.html"><i class="fa fa-hashtag pt-1 me-2"></i><span class="d-xl-inline d-lg-none d-md-none d-sm-none"> Explore</span></a>
<a class="list-group-item" href="notifications.html"><i class="fa fa-bell pt-1 me-2"></i><span class="d-xl-inline d-lg-none d-md-none d-sm-none"> Notifications</span></a>
<a class="list-group-item" href="messages.html"><i class="fa fa-envelope pt-1 me-2"></i><span class="d-xl-inline d-lg-none d-md-none d-sm-none"> Messages</span></a>
<a class="list-group-item" href="bookmarks.html"><i class="fa fa-bookmark pt-1 me-2"></i><span class="d-xl-inline d-lg-none d-md-none d-sm-none"> Bookmarks</span></a>
<a class="list-group-item" href="lists.html"><i class="fa fa-list pt-1 me-2"></i><span class="d-xl-inline d-lg-none d-md-none d-sm-none"> Lists</span></a>
<a class="list-group-item" href="profile.html"><i class="fa fa-user pt-1 me-2"></i><span class="d-xl-inline d-lg-none d-md-none d-sm-none"> Profile</span></a>
<a class="list-group-item ps-1" href="more.html">
    <span class="fa-stack fa-2xs ms-2 mb-1">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-ellipsis fa-stack-1x fa-inverse"></i>
    </span>
    <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">
     More</span></a>

   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;
