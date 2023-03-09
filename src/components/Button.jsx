const Button = ({ text, submit }) => {
  return (
    <button
      type={submit ? "submit" : ""}
      className="bg-violet-500 rounded py-3 mt-5 text-white hover:bg-violet-600"
    >
      {text}
    </button>
  );
};

export default Button;
