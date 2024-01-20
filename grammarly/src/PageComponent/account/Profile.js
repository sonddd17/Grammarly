import React from 'react';
import UserInfo from './UserInfo';
import Menu from '../Menu';
import '../../Styles/Profile.css'


function Profile() {
  const userData = {
    name: 'John Doe',
    gender: 'Male',
    id: '01',
    membership: 'Free',
  };

  return (
    <div className='container'>
        <Menu />
        <div className="profile">
            <h1>{userData.name}</h1>

            <div className="user-info-section">
                <UserInfo label="Name" value={userData.name} />
                <UserInfo label="Gender" value={userData.gender} />
                <UserInfo label="ID" value={userData.id} />
                <UserInfo label="Membership" value={userData.membership} />
            </div>

        </div>
    </div>
  );
};

export default Profile;
