import React from "react";
import PasswordResetTokenForm from "../common/PasswordResetTokenForm";

const PasswordResetToken = () => {
  return (
    <>
     <PasswordResetTokenForm loginPath="/employer/login" />
    </>
  );
};

export default PasswordResetToken;
