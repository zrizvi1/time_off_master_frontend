import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const UpdatePasswordForm = (props) => {
  const location = useLocation();

  const getQueryParams = (search) => {
    return new URLSearchParams(search);
  };

  const token = getQueryParams(location.search).get('token');
  
  const [formData, setFormData] = useState({
    reset_password_token: token,
    password: "",
    password_confirmation: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      reset_password_token: token
    }));
  }, [token]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.password) formErrors.password = "Password is required";
    if (formData.password !== formData.password_confirmation)
      formErrors.password_confirmation = "Passwords do not match";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    console.log("Token:", token);

    e.preventDefault();
    if (validateForm()) {
      const { reset_password_token, password, password_confirmation } = formData;
      props.onUpdatePassword({ reset_password_token, password, password_confirmation });
    }
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{props.title} Update Password</p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                          <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                            />
                            <label className="form-label" htmlFor="newPassword">New Password</label>

                            {errors.password && <div className="text-danger">{errors.password}</div>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                          <input
                              type="password"
                              id="form3Example4d"
                              className="form-control"
                              name="password_confirmation"
                              value={formData.password_confirmation}
                              onChange={handleChange}
                            />
                            <label className="form-label" htmlFor="confirmNewPassword">Confirm New Password</label>
                            {errors.password_confirmation && <div className="text-danger">{errors.password_confirmation}</div>}
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Update Password</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img 
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" 
                        alt="Sample image" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdatePasswordForm;
