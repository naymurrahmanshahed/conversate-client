import { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";

const Login = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    //clear state
    setFormFields({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="register flex flex-col justify-center items-center xl:mt-[4rem] ">
      <form onSubmit={handleLogin} className="flex flex-col gap-5">
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
        <Button text={"Login"} submit />
      </form>
    </div>
  );
};

export default Login;
