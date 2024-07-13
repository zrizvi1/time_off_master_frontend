import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">About Us</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Home</a>
                </li>
                <li>
                  <a href="#!" className="text-white">About</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Contact</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Blog</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white"><i className="fab fa-facebook-f"></i> Facebook</a>
                </li>
                <li>
                  <a href="#!" className="text-white"><i className="fab fa-twitter"></i> Twitter</a>
                </li>
                <li>
                  <a href="#!" className="text-white"><i className="fab fa-instagram"></i> Instagram</a>
                </li>
                <li>
                  <a href="#!" className="text-white"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2023 Company Name. All rights reserved.
        </div>
      </footer>
    </>
  )
}
