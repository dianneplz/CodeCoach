import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProfilePopUp from "./ProfilePopUp";

function SearchedUsersList() {
  const [popUp, setPopUp] = useState(false);
  const users = useSelector((state) => state.searchUser);
  const [userPopUp, setUserPopUp] = useState({ users });
  console.log("users:", users);
  return (
    <div className="user-container">
      {users.map((user) => (
        <div key={user.id}>
          <img
            className="avatar"
            src={user.image_url}
            alt={user.username}
            onClick={() => {
              setUserPopUp(user);
              setPopUp(true);
            }}
          />
          <span>Username: {user.username}</span>
          <span>{user.email}</span>
          <span>Role: {user.role}</span>
          <span>Experience: {user.experience}</span>
          <span>Bio: {user.bio}</span>
        </div>
      ))}
      <ProfilePopUp trigger={popUp} setTrigger={setPopUp}>
        <img
          className="avatar"
          src={userPopUp.image_url}
          alt={userPopUp.username}
        />
        <span>Username: {userPopUp.username}</span>
        <span>{userPopUp.email}</span>
        <span>Role: {userPopUp.role}</span>
        <span>Experience: {userPopUp.experience}</span>
        <span>Bio: {userPopUp.bio}</span>
      </ProfilePopUp>
    </div>
  );
}

export default SearchedUsersList;