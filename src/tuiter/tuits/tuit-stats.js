import React from "react"
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart as farHeart, faThumbsDown as farThumbsDown } from '@fortawesome/free-regular-svg-icons'
import { faRepeat, faCodeBranch, faHeart, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { updateTuitThunk } from "../../services/tuits-thunks.js";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    return (
        <ul className="nav mt-3 mb-1">
            <li className="nav-item col">
                <Link className="nav-link link-secondary"><FontAwesomeIcon icon={faComment} /> {tuit.replies}</Link>
            </li>
            <li className="nav-item col">
                <Link className="nav-link link-secondary"><FontAwesomeIcon icon={faRepeat} /> {tuit.retuits} </Link>
            </li>
            <li className="nav-item col">
                <Link className="nav-link link-secondary" onClick={
                    () => dispatch(updateTuitThunk({
                        ...tuit,
                        liked: !tuit.liked,
                        likes: tuit.likes + tuit.liked ? -1 : 1
                    }))
                } ><FontAwesomeIcon color={tuit.liked ? "red" : undefined} icon={tuit.liked ? faHeart : farHeart} /> {tuit.likes} </Link> 
            </li>
            <li className="nav-item col">
                <Link className="nav-link link-secondary" onClick={
                    () => dispatch(updateTuitThunk({
                        ...tuit,
                        disliked: !tuit.disliked,
                        dislikes: tuit.dislikes + tuit.disliked ? -1 : 1
                    }))
                } ><FontAwesomeIcon color={tuit.disliked ? "blue" : undefined} icon={tuit.disliked ? faThumbsDown : farThumbsDown} /> {tuit.dislikes} </Link> 
            </li>
            <li className="nav-item col">
                <Link className="nav-link link-secondary"><FontAwesomeIcon icon={faCodeBranch} /></Link>
            </li>
        </ul>
    )
}

export default TuitStats;
