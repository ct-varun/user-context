import React from "react";
import Login from "./assets/components/Login";
import Profile from "./assets/components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div
        style={{
          textAlign: "center",
          margin: "auto",
          marginTop: "30vh",
        }}
      >
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
