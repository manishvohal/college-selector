// // import "./App.css";
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Home from "./pages";
// // import SigninPage from "./pages/SigninPage";
// // import Register from "./pages/Register";

// // export default App;

import React from "react";
import "./App.scss";
import SigninPage from "./components/Login/SigninPage";
import Register from "./components/Login/Register";
import Home from "./pages";
import LR from "./components/Login/CombinedLoginRegister";
import CollegeList from "./components/CollegeList/CollegeList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<LR />} />
        <Route path="/CollegeList" element={<CollegeList />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
}
export default App;
