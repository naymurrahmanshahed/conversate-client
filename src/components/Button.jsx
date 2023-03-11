const Button = ({ text, submit, logout, handleLogout }) => {
  return (
    <button
      onClick={handleLogout ? handleLogout : null}
      type={submit ? "submit" : ""}
      className={`rounded px-5 py-3 ${
        logout
          ? "bg-rose-500 hover:bg-rose-600"
          : " bg-violet-500 mt-5 hover:bg-violet-600"
      } text-white `}
    >
      {text}
    </button>
  );
};

export default Button;
