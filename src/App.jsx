import "./App.css";
import { HomeScreen } from "./pages/HomeScreen/HomeScreen";
import { Route, Routes, Link } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";

const App = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged In
      } else {
        // Logged Out
      }
    });
    return unsubscribe;
  }, []);
  const user = false;
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={user ? <HomeScreen /> : <Login />} />
      </Routes>
    </div>
  );
};

export default App;
