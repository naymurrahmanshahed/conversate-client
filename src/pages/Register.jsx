import React, { useState } from "react";
import Button from "../components/Button";
import EyeButton from "../components/EyeButton";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";
import { useRegister } from "../hook/useRegister";

const Register = ({ handleToggle, type }) => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { register, loading, error } = useRegister();

  const handleRegister = async (e) => {
    e.preventDefault();

    // useRegiserhook call
    await register(formFields.name, formFields.email, formFields.password);
    //clear state
    setFormFields({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="register flex flex-col justify-center items-center 2xl:mt-20 ">
      <form onSubmit={handleRegister} className="flex flex-col gap-5 w-[25rem]">
        <SectionTitle title={"Register"} />
        <FormControl
          label={"name"}
          labelInnerText={"Name"}
          inputType={"text"}
          placeholder={"Enter Your Name"}
          formFields={formFields}
          setFormFields={setFormFields}
        />
        <FormControl
          label={"email"}
          labelInnerText={"Email"}
          inputType={"email"}
          placeholder={"Enter Your Email"}
          formFields={formFields}
          setFormFields={setFormFields}
        />
        <div className="relative">
          <FormControl
            label={"password"}
            labelInnerText={"Password"}
            inputType={type ? "text" : "password"}
            placeholder={"Enter Your Password"}
            formFields={formFields}
            setFormFields={setFormFields}
          />
          <EyeButton handleToggle={handleToggle} type={type} />
        </div>

        <Button text={loading ? "Registering...." : "Register"} submit />
        {error && <p className="text-rose-500">*{error}</p>}
      </form>
    </div>
  );
};

export default React.memo(Register);
