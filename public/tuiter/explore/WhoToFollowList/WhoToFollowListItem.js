const WhoToFollowListItem = (who) => {
 return(`
    <li class="list-group-item">
        <div class="row align-items-center">
            <div class="col-xxl-2 col-xl-2 col-lg-2 p-1">
                <img class="img-fluid img-square rounded-circle" src="${who.avatarIcon}" />
            </div>
            <div class="col-xxl-6 col-xl-7 col-lg-7 p-1">
                <p class="fw-bold mb-1">${who.userName} <i class="fa fa-circle-check"></i></p>
                <p class="mb-0">@${who.handle}</p>
            </div>
            <div class="col-xxl-4 col-xl-3 col-lg-3">
                <button class="btn bg-primary rounded-pill text-white fw-bold float-end">Follow</button>
            </div>
        </div>
    </li>
 `);
}
export default WhoToFollowListItem;
