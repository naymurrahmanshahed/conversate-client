import { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";

const Register = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();

    //clear state
    setFormFields({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="register flex flex-col justify-center items-center 2xl:mt-20 ">
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
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
        <Button text={"Register"} submit />
      </form>
    </div>
  );
};

export default Register;
