import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./components/landing";
import Login from "./components/login";
import Post from "./components/post";
import AddPost from "./components/addPost";
import Watch from "./components/watch";
import MyList from "./components/mylist";
import YourList from "./components/userList";
import "./styles.css";


const PrivateRoute = ({component, path}) => {
  if(localStorage.getItem('@user')) {
    return (
      <Route component={component} path={path} />
    )
  }
  else {
    window.location.replace('/login');
  }
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route component={Landing} exact path="/" />
          <Route component={Login} path="/login" /> 
          <PrivateRoute component={AddPost} path="/addpost" />
          <PrivateRoute component={Post} path="/:id" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
