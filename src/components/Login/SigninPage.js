import React, { useState } from "react";
import { useContext } from "react";
import loginImg from "./../../login.png";

import "./style.scss";
import firebaseConfig from "../../config";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { AuthContext } from "../Auth";

// const SigninPage = () => {

function SigninPage() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();

    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/CollegeList");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="test" />
        </div>
        <div className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">EMail</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="EMail ID"
              value={email}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={() => handleSubmit()}>
          Login
        </button>
        {errorMsg && <p className="error"> {errorMsg} </p>}
      </div>
    </div>
  );
}

export default SigninPage;
