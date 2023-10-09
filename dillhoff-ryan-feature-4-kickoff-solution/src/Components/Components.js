import Home from "./Home/Home.js";
import Connect from "./Connect/Connect.js";
import Login from "./Login/Login.js";
import Signup from "./Signup/Signup.js";
import YourMatches from "./YourMatches/YourMatches.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer.js";

export default function Components() {
  return (
    <Router>
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/yourmatches" element={<YourMatches />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </Router>
  );
}
