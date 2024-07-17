import React, { useState } from "react";
import PasswordResetTokenForm from "../common/PasswordResetTokenForm";
// import { useNavigate } from "react-router-dom";

const PasswordResetToken = () => {
  const baseUrl = process.env.REACT_APP_API_HOST
  const updatePasswordUrl = process.env.REACT_APP_USER_RESET_PASSWORD
  const [successMessage, setSuccessMessage] = useState("");
  const [failuerMessage, setFailuerMessage] = useState("");
  // const [redirectPath, setRedirectPath] = useState("");
  // const navigate = useNavigate();
  document.title = 'Reset Password - Time Off Master';

  const handlePasswordReset = async (formData) => {
    const url = `${baseUrl}${updatePasswordUrl}`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user: formData}),
      });
      if (response.ok) {
        setSuccessMessage("You have successfully sent a password reset token to your email. Please check your inbox.");
        // setRedirectPath("/employer/signup") // TO DO
      } else {
        const errorData = await response.json();
        setFailuerMessage(`Email ${errorData.errors['email']}`);
      }
    } catch (error) {
      setFailuerMessage("Error during Send Reset Password Link. Please try again later.");
    }
    setTimeout(() => {
      setSuccessMessage("");
      setFailuerMessage("");
      // redirectPath ? navigate(redirectPath) : ''
    }, 1000);
  };
  return (
    <>
    {successMessage && (
      <div className="alert alert-success text-center" role="alert">
        {successMessage}
      </div>
    )}
    {failuerMessage && (
      <div className="alert alert-danger text-center" role="alert">
        {failuerMessage}
      </div>
    )}
     <PasswordResetTokenForm loginPath="/user/login" onPasswordReset={handlePasswordReset} />
    </>
  );
};

export default PasswordResetToken;
