import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "../common/SignupForm";

export default function SignUp() {
  return (
    <>
      <SignupForm title="Employer" signupPath="/employer/login" />
    </>
  );
}
