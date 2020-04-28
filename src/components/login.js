import React from "react";
import { providers, firebaseAppAuth } from "./firebase";
import withFirebaseAuth from "react-with-firebase-auth";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

function Login(props) {
  const { user, signOut, signInWithGoogle, history } = props;

  if (user && !user.isAnonymous) {
    history.push("/");
    localStorage.setItem("@user", JSON.stringify(user));
  }
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>
        <Card style={{ padding: "50px 100px" }}>
          <h1 style={{ textAlign: "center" }}>Login</h1>
          {/* <TextField label="Email" name="email" />
          <br />
          <TextField label="Password" name="password" type="password" />
          <br /> */}
          <div style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              primary={true}
              onClick={signInWithGoogle}
              style={{ marginTop: 20, background: 'tomato', color: 'white' }}
            >
               <i
             
              style={{ fontSize: 27, cursor: "pointer", marginRight: 20, color: 'white' }}
              class="icon ion-logo-google"
            />
              Login with google
            </Button>
          </div>
          <div>
           
          </div>
        </Card>
      </div>
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Login);
