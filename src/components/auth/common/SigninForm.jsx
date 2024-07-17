import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SigninForm(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { email, password } = formData;
      props.onSignin({ email, password });
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
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{props.title} Sign in</p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                          </div>
                        </div>

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
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                            {errors.password && <div className="text-danger">{errors.password}</div>}
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Log In</button>
                        </div>
                      </form>
                      <p className="text-center">
                        Don't have an account? <Link to={props.signupPath} className="link-primary">Register</Link>
                      </p>
                      <p className="text-center">
                        <Link to={props.resetPasswordPath} className="link-primary">Forgot Password?</Link>
                      </p>
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
}
