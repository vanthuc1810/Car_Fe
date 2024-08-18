import { Link, useNavigate } from "react-router-dom";
import "./Forgot.scss";
import { loginApi } from "../../api/login-api/loginApi";
import { useState } from "react";
import { postEmailApi } from "../../api/gmail-api/postEmailApi";
import toast from "react-hot-toast";

export const Forgot = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    const data = {
      email,
      url: "http://localhost:3000/resetpassword/" + email,
    };
    postEmailApi(data).then((res) => {
      if (res.result !== undefined) {
        toast.success("Vui lòng truy cập email của bạn để reset password!");
      }
    });
  };
  return (
    <div className="login-container">
      <h2>Enter your Email</h2>
      <div className="row">
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

        <div className="login-btn-container mt-2">
          <button onClick={() => handleSubmit()}>Confirm</button>
        </div>
      </div>
    </div>
  );
};
