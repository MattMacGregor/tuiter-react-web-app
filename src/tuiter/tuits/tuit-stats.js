import React from "react"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faRepeat, faCodeBranch, faHeart } from '@fortawesome/free-solid-svg-icons'


const TuitStats = ({ tuit }) => {
    return (
        <ul className="nav mt-3 mb-1">
            <li className="nav-item col">
                <Link className="nav-link link-secondary"><FontAwesomeIcon icon={faComment} /> {tuit.replies}</Link>
            </li>
            <li className="nav-item col">
                <Link className="nav-link link-secondary"><FontAwesomeIcon icon={faRepeat} /> {tuit.retuits} </Link>
            </li>
            <li className="nav-item col">
                <Link className="nav-link link-secondary"><FontAwesomeIcon color={tuit.liked ? "red" : undefined} icon={tuit.liked ? faHeart : farHeart} /> {tuit.likes} </Link> 
            </li>
            <li className="nav-item col">
                <Link className="nav-link link-secondary"><FontAwesomeIcon icon={faCodeBranch} /></Link>
            </li>
        </ul>
    )
}

export default TuitStats;
