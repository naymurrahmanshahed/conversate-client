import React from "react";

const FormControl = ({
  label,
  labelInnerText,
  inputType,
  placeholder,
  formFields,
  setFormFields,
}) => {
  return (
    <div className="form-control flex flex-col gap-2">
      <label htmlFor={label} className="cursor-pointer">
        {labelInnerText}
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        id={label}
        value={formFields[label]}
        onChange={(e) =>
          setFormFields({ ...formFields, [label]: e.target.value })
        }
        className="border py-3 px-5 w-[25rem] rounded outline-none focus:border-violet-500 "
      />
    </div>
  );
};

export default React.memo(FormControl);
