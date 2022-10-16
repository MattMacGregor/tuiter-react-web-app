import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(`
      <ul class="list-group mt-2">
        ${
            posts.map(account => {
               return(PostSummaryItem(account));
            }).join('')
         }
      </ul>
    `);
}

export default PostSummaryList;
