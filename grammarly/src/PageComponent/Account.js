import React from "react";
import axios from "axios";
import "../App.css";
import Menu from "./Menu";

function Account(props) {

  /*const [profileData, setProfileData] = useState(null)

  useEffect(() => {
    getUsers();
  }, []);

  const email = localStorage.getItem('email');*/


  
  return (
    <div className="container">
      <Menu />
      <div className="Account-container">
        <h1>Account Setting</h1>
        <hr></hr>
        <h2>Profile</h2>
        <div className="Name">
          <a>Name</a>
          <div className="userinfo">
            <a>An An</a>
            <a className="update">update </a>
          </div>
        </div>
        <div className="Email">
          <a>Email</a>
          <div className="userinfo">
            <a>ansonansonanson1710@gmail.com</a>
            <a className="update">update </a>
          </div>
        </div>
        <div className="Password">
          <a>Password</a>
          <div className="userinfo">
            <a className="pass">ưdwwdwdawdawdawd</a>
            <a className="update">update </a>
          </div>
        </div>

        <div className="AboutYou">
          <h2>About You</h2>
        </div>

        <div>Premium: Active ? Not Active</div>
      </div>
    </div>
  );
}
export default Account;
