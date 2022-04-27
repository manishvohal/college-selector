import React, { useState } from "react";

import loginImg from "./../../login.png";
import "./style.scss";
import firebaseConfig from "../../config";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

function Register() {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    console.log(username, password, email);
    //e.preventDefault();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password).then((cred) => {
      console.log(cred);
    });
  };

  return (
    <div className="base-container">
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={(e) => handleInputChange(e)}
              id="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => handleInputChange(e)}
              placeholder="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
              placeholder="password"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" onClick={() => handleSubmit()} className="btn">
          Register
        </button>
      </div>
    </div>
  );
}
export default Register;
