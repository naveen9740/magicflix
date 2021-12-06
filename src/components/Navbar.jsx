import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";

export const NavBar = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && `nav_black`}`}>
      <div className="nav_contents">
        <h1 onClick={() => navigate("/")} className="nav_logo">
          MagicFlix
        </h1>
        <img
          onClick={() => navigate("/profile")}
          className="nav_avatar"
          src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
