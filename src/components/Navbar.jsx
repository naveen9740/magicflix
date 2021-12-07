import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

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
          src="https://cdn.imgbin.com/6/25/24/imgbin-user-profile-computer-icons-user-interface-mystique-aBhn3R8cmqmP4ECky4DA3V88y.jpg  "
          alt=""
        />
      </div>
    </div>
  );
};
