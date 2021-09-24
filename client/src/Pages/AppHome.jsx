import React, { useState } from "react";
import { hello } from "../redux/actions/testAction";
import { sendMessage } from "../redux/actions/messages";
import { useDispatch, useSelector } from "react-redux";
import UsersOnline from "../components/UsersOnline";
import { useAuth0 } from "@auth0/auth0-react";
import { sendUserDetails } from "../redux/actions/user";
import Header from "../layouts/header/Header";
import Search from "../layouts/sidebar/Search";
import {Route} from 'react-router-dom'

function emailToUsername(email) {
  let username = email.split("@");
  return username[0];
}

function AppHome() {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const userAccount = useSelector((state) => state.userAccount);
  const messages = useSelector((state) => state.messages);
  const waiting = useSelector((state) => state.waiting);

  const [testMessage, setTestMessage] = useState("");

  function testReducerClick() {
    dispatch(hello());
  }

  function dispatchMessage(e) {
    e.preventDefault();
    dispatch(sendMessage(testMessage));
  }

  function setMessageList() {
    return messages.map((message, index) => <li key={index}>{message}</li>);
  }

  if (!waiting) {
    if (userAccount.email === "") {
      const defaultUser = { ...user, name: emailToUsername(user.email) };
      dispatch(sendUserDetails(defaultUser));
    }
  }

  const messageList = setMessageList();
  return (
    <div>
      {waiting ? (
        <div className="spinner"></div>
      ) : (
        <>
        <Route path='/app'>
          <Header />
          </Route>
          <h1>Welcome to the Auth Land</h1>
          <ul>{messageList}</ul>
          <input
            value={testMessage}
            onChange={(e) => setTestMessage(e.target.value)}
          />
          <button onClick={(e) => dispatchMessage(e)}>Submit</button>
          <button onClick={() => testReducerClick()}>Test Reducer</button>
          <UsersOnline />
          <Search />
        </>
      )}
    </div>
  );
}

export default AppHome;
