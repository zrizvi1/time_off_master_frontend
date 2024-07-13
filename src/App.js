import './App.css';
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import UserSignin from "./components/auth/users/Signin";
import EmployerSignin from "./components/auth/employers/Signin";
import UserSignup from "./components/auth/users/Signup";
import EmployerSignup from "./components/auth/employers/Signup";
import UserPasswordResetToken from "./components/auth/users/PasswordResetToken";
import EmployerPasswordResetToken from "./components/auth/employers/PasswordResetToken";
import UserUpdatePassword from "./components/auth/users/UpdatePassword";
import EmployerUpdatePassword from "./components/auth/employers/UpdatePassword";

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/login" element={<UserSignin />} />
          <Route path="/employer/login" element={<EmployerSignin />} />
          <Route path="/user/signup" element={<UserSignup />} />
          <Route path="/employer/signup" element={<EmployerSignup />} />
          <Route path="/user/reset-password" element={<UserPasswordResetToken />} />
          <Route path="/employer/reset-password" element={<EmployerPasswordResetToken />} />
          <Route path="/user/update-password" element={<UserUpdatePassword />} />
          <Route path="/employer/update-password" element={<EmployerUpdatePassword />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
