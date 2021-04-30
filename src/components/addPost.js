import React from "react";
import firebase from "firebase";
import { providers, firebaseAppAuth } from "./firebase";
import withFirebaseAuth from "react-with-firebase-auth";
import Moment from "react-moment";
import {
  Container,
  PostContainer,
  Header,
  AddPostContainer,
  Button,
  Select,
  Posts
} from "./styles";
function Landing(props) {
  const [title, setTitle] = React.useState();
  const [description, setDescription] = React.useState();
  const [thread, setThread] = React.useState("r/covid19");
  const [itemList, setItemList] = React.useState([]);
  React.useEffect(() => {
    let value = {};
    firebase
      .database()
      .ref(`thread`)
      .once("value", function(snapshot) {
        value = snapshot.val();
        let array = [];
        if (value) {
          Object.keys(value).forEach(item => array.push(value[item]));
          setItemList(array);
        }
      });
  }, []);
  const createPost = () => {
    firebase
      .database()
      .ref(`thread/${itemList.length + 1}`)
      .update({
        id: itemList.length + 1,
        name: title,
        description: description,
        thread: thread,
        time: new Date(),
        user: JSON.parse(localStorage.getItem("@user")).displayName,
        vote: 0
      })
      .then(data => {
        //success callback
        console.log("data ", data);
      })
      .catch(error => {
        //error callback
        console.log("error ", error);
      });
    props.history.push("/");
  };

  const onChangeTitle = e => {
    setTitle(e.target.value);
  };
  const onChangeDescription = e => {
    setDescription(e.target.value);
  };
  return (
    <Container>
      <PostContainer>
        <Header>
        <div onClick={() => props.history.push("/")} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <img
            width="50"
            height="auto"
            src="https://www.un.org/sites/un2.un.org/files/covid19_response_icon.svg"
            alt="img"
          />
          <span style={{paddingLeft: 10, color: 'tomato'}}>Covid Info</span>
        </div>
          {JSON.parse(localStorage.getItem("@user")) ? (
            <img
              style={{ borderRadius: "50%" }}
              width="30px"
              height="30px"
              alt="img"
              src={JSON.parse(localStorage.getItem("@user")).photoURL}
            />
          ) : null}
        </Header>
        <Posts>
          <AddPostContainer>
            <input value={title} onChange={onChangeTitle} placeholder="Title" />
            <textarea
              value={description}
              onChange={onChangeDescription}
              name="description"
              type="text"
              placeholder="Description"
            />
            <Select onChange={e => setThread(e.target.value)}>
              <option>c/covid19</option>
              <option>c/essentials</option>
              <option>c/vaccince</option>
            </Select>
            <div style={{ textAlign: "right" }}>
              <Button onClick={() => createPost()}>Post</Button>
            </div>
          </AddPostContainer>
        </Posts>
      </PostContainer>
    </Container>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Landing);
