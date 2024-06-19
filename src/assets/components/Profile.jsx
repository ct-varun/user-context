import React from "react";
import UserContext from "../../Context/UserContext";
import { useContext } from "react";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user?.username) return <h1>not logged in</h1>;
  return <h1>Profile : {user.username}</h1>;
}

export default Profile;
