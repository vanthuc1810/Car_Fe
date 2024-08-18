import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { resetPasswordApi } from "../../../api/user-api/resetPasswordApi";
export const ResetPassword = () => {
  const { email } = useParams();
  const [data, setData] = useState({
    email: "vanthuc08888@gmail.com",
    newpassword: "",
    confirmpassword: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    resetPasswordApi(data);
  }
  return (
    <div className="login-container">
      <h2>Reset password</h2>
      <div className="row">
        <div className="mt-2 email-container">
          <label htmlFor="newpassword">New password</label>
          <input
            type="password"
            name="newpassword"
            required
            id="newpassword"
            placeholder="New password"
            onChange={handleChange}
          />
        </div>
        <div className="mt-2 password-container">
          <label htmlFor="confirmpassword">Confirm password</label>
          <input
            type="password"
            required
            id="confirmpassword"
            name="confirmpassword"
            placeholder="Confirm password"
            onChange={handleChange}
          />
        </div>

        <div className="login-btn-container">
          <button onClick={handleSubmit}>Reset password</button>
        </div>
      </div>
    </div>
  );
};
