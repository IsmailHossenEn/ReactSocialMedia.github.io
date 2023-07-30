import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";

export const Navbar = () => {
  const [user] = useAuthState(auth);
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="links">
        <Link to="/">Home</Link>
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/createpost">Create Post</Link>
        )}
      </div>
      <div className="user">
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img
              className="userimage"
              src={user?.photoURL || ""}
              width="30"
              height="30"
            />
            <button onClick={logout} className="logout">
              Log Out
            </button>
          </>
        )}
      </div>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};
