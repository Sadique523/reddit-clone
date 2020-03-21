import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./components/landing";
import Login from "./components/login";
import Post from "./components/post";
import AddPost from "./components/addPost";
import Watch from "./components/watch";
import "./styles.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route component={Landing} exact path="/landing" />
          <Route component={Login} path="/login" />
          <Route component={AddPost} path="/addpost" />
          <Route component={Watch} path="/" />
          <Route component={Post} path="/:id" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
