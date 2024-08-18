import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { loginApi } from "../../api/login-api/loginApi";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (data) => {
    await loginApi(data)
      .then((token) => {
        localStorage.setItem("authToken", token);
        navigate("/");
      })
      .catch((error) => navigate("login"));
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-body">
        <div className="email-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            id="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
        </div>
        <div className="password-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="remember-me-container">
          <Link className="new-account" to="/forgot">
            Forgot your password?
          </Link>
        </div>
        <div className="login-btn-container">
          <button onClick={() => handleSubmit(data)}>Login</button>
        </div>
        <Link className="new-account" to="/signup">
          Create a new account?
        </Link>
      </div>
    </div>
  );
};
