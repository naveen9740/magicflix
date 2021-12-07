import { useNavigate } from "react-router";
import { useAuthContext } from "../../authContext";
import { NavBar } from "../../components";
import { auth } from "../../firebase";
import "./Profile.css";

export const Profile = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { popup, setPopup } = useAuthContext();
  console.log(popup);
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
              <div className="plansScreen_plans">
                <div className="plansScreen_info">
                  <h5>Premium</h5>
                  <h6>4k+ HDR</h6>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="plansScreen_plans">
                <div className="plansScreen_info">
                  <h5>Basic</h5>
                  <h6>720p</h6>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="plansScreen_plans">
                <div className="plansScreen_info">
                  <h5>Standard</h5>
                  <h6>240p</h6>
                </div>
                <button>Subscribe</button>
              </div>
              <button
                onClick={() => {
                  setPopup(true);
                  setTimeout(() => {
                    auth.signOut();
                    navigate("/");
                    setPopup(false);
                  }, 2000);
                }}
                className="profile_signout"
              >
                Sign Out
              </button>
              {popup && <span className="signout_popup">Log OutSuccess!</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
