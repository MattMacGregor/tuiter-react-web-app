import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
      <ul class="list-group">
        ${
            who.map(account => {
               return(WhoToFollowListItem(account));
            }).join('')
         }
      </ul>
    `);
}

export default WhoToFollowList;
