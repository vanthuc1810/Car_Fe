import { useEffect, useState } from "react";
import "./Profile.scss";
import { getMyInfo } from "../../api/user-api/getUserApi";
import { editProfile } from "../../api/user-api/editUserApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { topUpApi, withDrawApi } from "../../api/wallet-api/wallet-api";
import { set } from "date-fns";
import { Wallet } from "./Wallet/Wallet";
import { Transation } from "./Transation/Transation";

export const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [amount, setAmount] = useState(0);
  const [profileData, setProfileData] = useState({
    name: "",
    dateofbirth: "" || user?.dateofbirth,
    nationalidno: 0,
    phoneno: "",
    email: "",
    address: "",
    drivinglicense: "",
    password: "",
  });
  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };
  
  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  }
  const handleSubmit = () => {
    editProfile(profileData, localStorage.getItem("authToken")).then((res) => {
      if (res.result !== undefined) {
        toast.success("Sửa thông tin tài khoản thành công!");
        alert(
          "Sửa thông tin thành công! bạn cần phải đăng nhập lại tài khoản sau khi sửa thông tin!!!"
        );
        localStorage.removeItem("authToken");
        navigate("/login");
      }
    });
  };

  


  useEffect(() => {
    getMyInfo(localStorage.getItem("authToken")).then((res) =>
      setUser(res.result)
    );
  }, []);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="card mb-4 h-100">
            <div className="card-body text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-circle img-fluid"
              />
              <h5 className="my-3">Name</h5>
              <h6 className="mb-1 text-success">{user?.role}</h6>
              <p className="text-muted mb-4">{user?.address}</p>
            </div>
            <Wallet user={user}/>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <div className="row d-flex align-items-center">
                <div className="col-sm-3">
                  <p className="mb-0">{user?.name}</p>
                </div>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="text-muted mb-0 profile-input"
                    name="name"
                    placeholder={user?.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row d-flex align-items-center">
                <div className="col-sm-3">
                  <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                  <input
                    type="email"
                    className="text-muted mb-0 profile-input"
                    name="email"
                    placeholder={user?.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row d-flex align-items-center">
                <div className="col-sm-3">
                  <p className="mb-0">Phone</p>
                </div>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="text-muted mb-0 profile-input"
                    name="phoneno"
                    placeholder={user?.phoneno}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row d-flex align-items-center">
                <div className="col-sm-3">
                  <p className="mb-0">Id National</p>
                </div>
                <div className="col-sm-9">
                  <input
                    type="number"
                    className="text-muted mb-0 profile-input"
                    name="nationalidno"
                    placeholder={user?.nationalidno}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row d-flex align-items-center">
                <div className="col-sm-3">
                  <p className="mb-0">Date of Birth</p>
                </div>
                <div className="col-sm-9">
                  <input
                    type="date"
                    className="text-muted mb-0 profile-input"
                    name="dateofbirth"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row d-flex align-items-center">
                <div className="col-sm-3">
                  <p className="mb-0">Address</p>
                </div>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="text-muted mb-0 profile-input"
                    name="address"
                    placeholder={user?.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <hr />
              <div className="row d-flex align-items-center">
                <div className="col-sm-3">
                  <p className="mb-0">Driving License</p>
                </div>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="text-muted mb-0 profile-input"
                    name="drivinglicense"
                    placeholder={user?.drivinglicense}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <hr />
              <div className="row d-flex align-items-center">
                <div className="col-sm-3">
                  <p className="mb-0">Password</p>
                </div>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="text-muted mb-0 profile-input"
                    placeholder="********"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-end">
            <button onClick={handleSubmit} className="btn btn-dark">
              Change my profile
            </button>
          </div>
          <Transation/>
        </div>
      </div>
    </div>
  );
};
