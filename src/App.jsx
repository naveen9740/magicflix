import "./App.css";
import { HomeScreen } from "./pages/HomeScreen/HomeScreen";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useAuthContext } from "./authContext";
import { Profile } from "./pages/Profile/Profile";

const App = () => {
  const { user, dispatch } = useAuthContext();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch({
          type: "Login",
          payload: { uid: userAuth.uid, email: userAuth.email },
        });
        // Logged In
      } else {
        // Logged Out
        dispatch({ type: "Logout" });
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path="/profile" element={user ? <Profile /> : <Login />} />
        <Route path="/" element={user ? <HomeScreen /> : <Login />} />
      </Routes>
    </div>
  );
};

export default App;
