import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="http://pngimg.com/uploads/lotus_flower/lotus_flower_PNG36.png" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://pbs.twimg.com/profile_banners/912245600997007360/1533995921/1500x500" />
        </div>
        <div>avatar+discription</div>
        <div>
          My Posts
          <div>New Post</div>
          <div>Post1</div>
          <div>Post2</div>
        </div>
      </div>
    </div>
  );
};

export default App;
