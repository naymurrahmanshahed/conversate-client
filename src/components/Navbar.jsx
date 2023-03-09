import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="py-10 flex justify-between">
      <div className="logo text-xl font-semibold hover:text-violet-500 duration-300">
        <Link to="/">Conversate</Link>
      </div>
      <nav>
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
        {/* <div>
          <p>
            Logged is as: <span>Shahed</span>
          </p>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
