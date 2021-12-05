import "./App.css";
import { HomeScreen } from "./pages/HomeScreen/HomeScreen";
import { Route, Routes, Link } from "react-router-dom";
import { Login } from "./pages/Login/Login";

const App = () => {
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
