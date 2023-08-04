import React from "react";
import Logo from "./logo";
import SreachBar from "./SreachBar";
import Profile from "./profile";

function App() {
  return (
    <div className="flex justify-center navBar">
      <Logo />
      <SreachBar />
      <Profile />
    </div>
  );
}

export default App;
