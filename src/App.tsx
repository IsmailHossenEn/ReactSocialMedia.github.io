import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/main";
import { Login } from "./pages/login";
import { Navbar } from "./component/navbar";
import { Createpost } from "./pages/create-post/Createpost";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<Createpost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
