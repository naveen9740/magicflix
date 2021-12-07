import { useLocation, useNavigate } from "react-router";

export const NotFound = () => {
  let { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="notFound">
      <h1 className="notFound_heading">{pathname} Page Not Found :(</h1>
      <button className="notFound_btn" onClick={() => navigate("/")}>
        Go To Home
      </button>
    </div>
  );
};
