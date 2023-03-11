import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuthContext } from "./hook/useAuthContext";
const App = () => {
  const { user } = useAuthContext();
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
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
