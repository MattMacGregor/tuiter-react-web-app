import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitItem = ({
    tuit
}) => {
 const dispatch = useDispatch();
 const deleteTuitHandler = (id) => {
   dispatch(deleteTuit(id));
 }
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-2">
       <img className="rounded-circle" height={64} src={`/images/${tuit.image}`} alt=""/>
     </div>
     <div className="col-10">
       <div>
        <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
        {tuit.userName} . {tuit.time}
       </div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.tuit}</div>
     </div>
     <TuitStats tuit={tuit} />
   </div>
  </li>
 );
};
export default TuitItem;

