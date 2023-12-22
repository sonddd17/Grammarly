import React from "react";
import "../App.css";

function Account(){
    return(
        <div className="content-container"> 
         <div className="UserPic">
            <img src="" alt="Error"></img>
         </div>
         <div> Name</div>
         <div> Email</div>
         <div> Password</div>
         <div>Premium: Active ? Not Active</div>
        </div>
    );
}

export default Account;