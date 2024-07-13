import React from 'react'
import { Link } from "react-router-dom";

export default function Body() {
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee", minHeight: "120vh" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Welcome</p>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <Link to="/user/login" className="btn btn-primary btn-lg mx-2">Sign in as User</Link>
                        <Link to="/employer/login" className="btn btn-secondary btn-lg mx-2">Sign in as Employer</Link>
                      </div>
                      <p className="text-center mb-5">
                        Sign in as User to access your personalized dashboard and manage your account.
                      </p>
                      <div className="bg-info text-white rounded p-4">
                        <h4 className="text-center mb-4">Why Choose Us?</h4>
                        <p className="text-center">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
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
  )
}
