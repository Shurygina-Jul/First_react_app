import React, { Component } from "react";
import "./App.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
// import News from "./Components/News/News";
// import Music from "./Components/Music/Music";
// import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/MyPosts/ProfileInfo/ProfileContainer";
import Login from "./Components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import Preloader from "./Components/Common/Preloader/Preloader";
import { initializeApp } from "./Redux/app-reducer";
import store from "./Redux/redux-store";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

{
  /* <div className="app-wrapper">
      //   <HeaderContainer />
      //   <Navbar />
      //   <div className="app-wrapper-content">
      //     <Route path="/dialogs" render={() => <DialogsContainer />} />
      //     <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
      //     <Route path="/users" render={() => <UsersContainer />} />
      //     <Route path="/login" render={() => <Login />} />
      //   </div>
      // </div>
    ); */
}
