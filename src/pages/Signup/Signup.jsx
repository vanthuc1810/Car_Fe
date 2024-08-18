import { Link } from "react-router-dom";
import "./Signup.scss";
import { useState } from "react";
import { createUserApi } from "../../api/user-api/createUserApi";
import toast from "react-hot-toast";
export const Signup = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    dateofbirth: "",
    nationalidno: "",
    email: "",
    phoneno: "",
    address: "",
    drivinglicense: "",
    role: "CUSTOMER",
    password: "",
    wallet: 0
  });
  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    createUserApi(registerData).then(res => {
      if(res.result !== undefined)
      {
        toast.success("Đăng ký thành công");
      }
    });
  };
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="signup-body">
        <div className="email-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
          />
        </div>
        <div className="email-container">
          <label htmlFor="nationalid">Id no</label>
          <input type="number" required id="nationalid" name="nationalidno" onChange={handleChange}/>
        </div>
        <div className="email-container">
          <label htmlFor="phone">Phone no</label>
          <input
            type="text"
            required
            id="phone"
            name="phoneno"
            onChange={handleChange}
            placeholder="Enter your phone"
          />
        </div>
        <div className="email-container">
          <label htmlFor="dateofbirth">Date of Birth</label>
          <input
            type="date"
            required
            id="dateofbirth"
            name="dateofbirth"
            onChange={handleChange}
            placeholder=""
          />
        </div>
        <div className="email-container">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            name="address"
            onChange={handleChange}
            id="address"
            placeholder="Enter your address"
          />
        </div>
        <div className="email-container">
          <label htmlFor="drivinglicense">Driving License</label>
          <input
            type="text"
            required
            id="drivinglicense"
            name="drivinglicense"
            onChange={handleChange}
          />
        </div>

        <div className="email-container">
          <label htmlFor="email">Email Address</label>
          <input type="email" required id="email" name="email" placeholder="Enter Email" onChange={handleChange} />
        </div>
        <div className="password-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter Password"
          />
        </div>
        <div className="email-container">
          <label>Role</label>
          <select
            name="role"
            value={registerData.role}
            onChange={handleChange}
          >
            <option value="CUSTOMER">CUSTOMER</option>
            <option value="CAROWNER">CAROWNER</option>
          </select>
        </div>
        <button onClick={handleSubmit} className="btn btn-dark mt-2">
          Register
        </button>
        <Link to="/login">Already have an account?</Link>
      </div>
    </div>
  );
};
