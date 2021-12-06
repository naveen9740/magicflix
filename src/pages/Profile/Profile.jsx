import { useNavigate } from "react-router";
import { useAuthContext } from "../../authContext";
import { NavBar } from "../../components";
import { auth } from "../../firebase";
import "./Profile.css";

export const Profile = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  return (
    <div className="profile">
      <NavBar />
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <div className="profile_details">
            <h2>{user?.email}</h2>
            <div className="profile_plans">
              <h3>Plans</h3>

              <button
                onClick={() => {
                  auth.signOut();
                  navigate("/");
                }}
                className="profile_signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
