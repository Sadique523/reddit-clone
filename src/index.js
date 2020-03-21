import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Landing from "./components/landing";
// import Login from "./components/login";
// import Post from "./components/post";
// import AddPost from "./components/addPost";
import Watch from "./components/watch";
import "./styles.css";

import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBikYybI933v_jwoDzM8snIlWQI1GPFHJE",
  authDomain: "auth-39cb9.firebaseapp.com",
  databaseURL: "https://auth-39cb9.firebaseio.com",
  projectId: "auth-39cb9",
  storageBucket: "auth-39cb9.appspot.com"
};

firebase.initializeApp(config);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* <Route component={Landing} exact path="/landing" />
          <Route component={Login} path="/login" /> */}
          {/* <Route component={AddPost} path="/addpost" /> */}
          <Route component={Watch} path="/" />
          {/* <Route component={Post} path="/:id" /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
