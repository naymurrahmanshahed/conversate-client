import React, { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";
import { useLogin } from "../hook/useLogin";

const Login = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const { login, loading, error } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    //uselogin hook call

    await login(formFields.email, formFields.password);

    //clear state
    setFormFields({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="register flex flex-col justify-center items-center xl:mt-[4rem] ">
      <form onSubmit={handleLogin} className="flex flex-col gap-5 w-[25rem]">
        <SectionTitle title={"Login"} />

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
        <Button text={loading ? "Logging...." : "Login"} submit />
        {error && <p className="text-rose-500">*{error}</p>}
      </form>
    </div>
  );
};

export default React.memo(Login);
