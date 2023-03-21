import { FaEye, FaEyeSlash } from "react-icons/fa";
const EyeButton = ({ handleToggle, type }) => {
  return (
    <span
      onClick={handleToggle}
      className="icons-span absolute right-[2%]
         top-[28%]
      bottom-0 flex items-center text-violet-500"
    >
      {type ? <FaEyeSlash /> : <FaEye />}
    </span>
  );
};

export default EyeButton;
