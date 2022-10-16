import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
                <div class="row">
                    <div class="col-11">
                        <div class="input-group rounded-pill border border-2 bg-white">
                            <span class="input-group-text bg-white rounded-pill border-0">
                                <button class="btn border-0 fa fa-search ps-1 p-0"></button>
                            </span>
                            <input type="text" id="searchbar" class="form-control rounded-pill border-0" placeholder="Search">
                        </div>
                    </div>
                    <div class="container-fluid col-1 position-relative">
                        <button class="btn rounded-circle border-0 position-absolute translate-middle start-50 top-50">
                            <i class="fa fa-gear fa-2x text-primary position-absolute translate-middle start-50 top-50"></i>
                        </button>
                    </div>
                </div>
                <ul class="nav nav-tabs mt-1">
                    <li class="nav-item"><a class="nav-link active" href="for-you.html">For you</a></li>
                    <li class="nav-item"><a class="nav-link" href="trending.html">Trending</a></li>
                    <li class="nav-item"><a class="nav-link" href="news.html">News</a></li>
                    <li class="nav-item"><a class="nav-link" href="sports.html">Sports</a></li>
                    <li class="nav-item d-md-inline d-sm-none"><a class="nav-link" href="entertainment.html">Entertainment</a></li>
                </ul>
                <div class="container-fluid position-relative p-0">
                    <img class="m-0 mt-1 img-fluid" src="../../images/starship.jpg" />
                    <span class="position-absolute start-0 bottom-0 ps-2 pb-1 fs-3 fw-bolder text-white">SpaceX's Starship</span>
                </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;


