import React from 'react';

const UserInfo = ({ label, value }) => {
  return (
    <div className="user-info">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
  );
};

export default UserInfo;
