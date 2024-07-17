import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    agreed_to_terms: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    if (formData.password !== formData.confirm_password)
      formErrors.confirm_password = "Passwords do not match";
    if (!formData.agreed_to_terms)
      formErrors.agreed_to_terms = "You must agree to the terms and conditions";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { name, email, password } = formData;
      props.onSignup({ name, email, password });
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
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{props.title} Sign up</p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                            />
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                            {errors.name && <div className="text-danger">{errors.name}</div>}
                          </div>
                        </div>

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

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              name="confirm_password"
                              value={formData.confirm_password}
                              onChange={handleChange}
                            />
                            <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                            {errors.confirm_password && <div className="text-danger">{errors.confirm_password}</div>}
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            name="agreed_to_terms"
                            checked={formData.agreed_to_terms}
                            onChange={handleChange}
                            id="form2Example3c"
                          />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree to all statements in <a href="#!">Terms of service</a>
                          </label>
                          {errors.agreed_to_terms && <div className="text-danger">{errors.agreed_to_terms}</div>}
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>
                      </form>
                      <p className="text-center">
                        Already have an account? <Link to={props.loginPath} className="link-primary">Login here</Link>
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
