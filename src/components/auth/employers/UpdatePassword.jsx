import React, { useState } from "react";
import UpdatePasswordForm from '../common/UpdatePasswordForm'
// import { useNavigate } from "react-router-dom";

export default function UpdatePassword() {
  const baseUrl = process.env.REACT_APP_API_HOST
  const signupUrl = process.env.REACT_APP_EMPLOYER_UPDATE_PASSWORD
  const [successMessage, setSuccessMessage] = useState("");
  const [failuerMessage, setFailuerMessage] = useState("");
  // const [redirectPath, setRedirectPath] = useState("");
  // const navigate = useNavigate();
  document.title = 'Update Password - Time Off Master';
  const handleUpdatePassword = async (formData) => {
    const url = `${baseUrl}${signupUrl}`;
    debugger
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({employer: formData}),
      });
      if (response.ok) {
        setSuccessMessage("Your password has been successfully updated. Please log in using your updated password.");
        // setRedirectPath("/employer/login"); // TO DO
      } else {
        const errorData = await response.json();
        setFailuerMessage(`Token ${errorData.errors['reset_password_token']}`);
      }
    } catch (error) {
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
      <UpdatePasswordForm title="Employer" onUpdatePassword={handleUpdatePassword} />
    </>
  )
}
