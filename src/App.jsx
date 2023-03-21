import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuthContext } from "./hook/useAuthContext";
import { useState } from "react";
const App = () => {
  const [type, setType] = useState(false);
  const { user } = useAuthContext();
  const handleToggle = () => {
    setType((prevType) => !prevType);
  };
  return (
    <div className="app container mx-auto">
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={!user ? <Navigate to="/login" /> : <Chat />}
          />
          <Route
            path="/login"
            element={
              user ? (
                <Navigate to="/" />
              ) : (
                <Login type={type} handleToggle={handleToggle} />
              )
            }
          />
          <Route
            path="/register"
            element={
              user ? (
                <Navigate to="/" />
              ) : (
                <Register type={type} handleToggle={handleToggle} />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
