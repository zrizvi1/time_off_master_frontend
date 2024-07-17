import React, { useState } from "react";
import SignupForm from "../common/SignupForm";
// import { useNavigate } from "react-router-dom";

export default function SignUp(props) {
  const baseUrl = process.env.REACT_APP_API_HOST
  const signupUrl = process.env.REACT_APP_USER_SIGNUP
  document.title = 'Sign Up - Time Off Master';
  const [successMessage, setSuccessMessage] = useState("");
  const [failuerMessage, setFailuerMessage] = useState("");
  // const [redirectPath, setRedirectPath] = useState("");
  // const navigate = useNavigate();
  document.title = 'Sign Up - Time Off Master';
  const handleSignup = async (formData) => {
    const url = `${baseUrl}${signupUrl}`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user: formData}),
      });
      if (response.ok) {
        setSuccessMessage("You have successfully signed up to our site. Please check your email and confirm your account.");
        // setRedirectPath("/employer/login"); // TO DO
      } else {
        const errorData = await response.json();
        setFailuerMessage(errorData.error); 
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setFailuerMessage("Error during signup. Please try again later.");
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
      <SignupForm title="User" loginPath="/user/login" onSignup={handleSignup} />
    </>
  );
}
