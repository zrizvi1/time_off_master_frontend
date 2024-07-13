import React from "react";
import SigninForm from "../common/SigninForm";

export default function Signin() {
  return (
    <>
     <SigninForm title="User" loginPath="/user/signup" resetPasswordPath="/user/reset-password" />
    </>
  );
}
