import React, { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";
import { useRegister } from "../hook/useRegister";

const Register = () => {
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
        <FormControl
          label={"password"}
          labelInnerText={"Password"}
          inputType={"password"}
          placeholder={"Enter Your Password"}
          formFields={formFields}
          setFormFields={setFormFields}
        />
        <Button text={loading ? "Registering...." : "Register"} submit />
        {error && <p className="text-rose-500">*{error}</p>}
      </form>
    </div>
  );
};

export default React.memo(Register);
