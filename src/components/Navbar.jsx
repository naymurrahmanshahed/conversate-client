import { Link } from "react-router-dom";
import { useAuthContext } from "../hook/useAuthContext";
import Button from "./Button";
const Navbar = () => {
  const { user, dispatch } = useAuthContext();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
  };
  return (
    <header className="py-10 flex justify-between">
      <div className="logo text-xl font-semibold hover:text-violet-500 duration-300">
        <Link to="/">Conversate</Link>
      </div>
      <nav>
        {!user ? (
          <div className="flex gap-5">
            <Link
              to="/login"
              className="hover:text-violet-500  hover:underline underline-offset-2 duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="hover:text-violet-500 hover:underline underline-offset-2 duration-300"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className="flex gap-5 items-center">
            <p>
              Logged is as: <span>{user.name}</span>
            </p>
            <Button handleLogout={handleLogout} text="Logout" logout />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
