const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row align-items-center">
                <div class="col-10 p-2">
                    <p class="gray m-0">${post.topic}</p>
                    ${
                        post.userName ?
                        `<p class="fw-bold m-0">
                            ${post.userName} <i class="fa fa-check-circle"></i><span class="gray fw-normal"> -</span>` : ''
                    }
                        <span class="gray fw-normal">${post.time}</span>
                    </p>
                    <p class="fw-bold m-0">
                        ${post.title}
                    </p>
                    ${
                        post.tweets  ?
                        `<p class="gray m-0">
                            ${post.tweets} Tweets
                        </p>` : ''
                    }
                </div>
                <div class="col-2 p-0 pe-1">
                    <img class="img-fluid rounded-4 float-end" src="${post.image}" />
                </div>
            </div>
        </li>
            `);
}

export default PostSummaryItem;
