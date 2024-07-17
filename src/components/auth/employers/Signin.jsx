import React, { useState } from "react";
import SigninForm from "../common/SigninForm";
// import { useNavigate } from "react-router-dom";

export default function Signin() {
  const baseUrl = process.env.REACT_APP_API_HOST
  const signinUrl = process.env.REACT_APP_EMPLOYER_SIGNIN
  const [successMessage, setSuccessMessage] = useState("");
  const [failuerMessage, setFailuerMessage] = useState("");
  // const [redirectPath, setRedirectPath] = useState("");
  // const navigate = useNavigate();
  document.title = 'Sign In - Time Off Master';

  const handleSignin = async (formData) => {
    const url = `${baseUrl}${signinUrl}`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({employer: formData}),
      });
      if (response.ok) {
        setSuccessMessage("You have successfully signed in to our site. Please complete your profile.");
        // setRedirectPath("/employer/signup") // TO DO
      } else {
        const errorData = await response.json();
        setFailuerMessage(errorData.error); 
      }
    } catch (error) {
      setFailuerMessage("Error during signin. Please try again later.");
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
     <SigninForm title="Employer" signupPath="/employer/signup" resetPasswordPath="/employer/reset-password" onSignin={handleSignin}/>
    </>
  );
}
