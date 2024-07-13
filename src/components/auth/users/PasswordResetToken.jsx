import React from "react";
import PasswordResetTokenForm from "../common/PasswordResetTokenForm";

const PasswordResetToken = () => {
  return (
    <>
     <PasswordResetTokenForm loginPath="/user/login" />
    </>
  );
};

export default PasswordResetToken;
