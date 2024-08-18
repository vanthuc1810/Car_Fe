import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { SiTaichilang } from "react-icons/si";
import { CgShoppingCart } from "react-icons/cg";
import { getMyInfo } from "../../api/user-api/getUserApi";
import "./Header.scss";
import toast from "react-hot-toast";

export const Header = () => {
  const navigate = useNavigate();
  const [showHamburger, setShowHamburger] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    toast.success("Đăng xuất thành công!");
    navigate("/login");
    setUser(null); // Đảm bảo cập nhật trạng thái người dùng khi logout
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (token) {
        try {
          const response = await getMyInfo(token);
          setUser(response.result);
        } catch (error) {
          console.error("Failed to fetch user info", error);
          // Xử lý lỗi nếu cần
        }
      }
    };

    fetchUserInfo();
  }, [token]); // Chỉ chạy khi component mount

  useEffect(() => {
    setToken(localStorage.getItem("authToken"));
  }, [localStorage.getItem("authToken")]);

  return (
    <nav>
      <div className="nav-logo-home-button">
        <NavLink to="/">
          <SiTaichilang />
          MultiCar
        </NavLink>
      </div>
      <div
        className={
          !showHamburger
            ? "nav-link-container-mobile nav-link-container"
            : "nav-link-container"
        }
      >
        <NavLink to="/product-listing" className="fs-5">
          Shop
        </NavLink>
        {user ? (
          <div
            className="dropdown-toggle fs-5"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {user?.name}
            <ul className="dropdown-menu mt-4 rounded-0">
              <li
                className="text-dark p-2 ms-2 w-100 text-start"
                onClick={() => navigate("/myInfo")}
              >
                Profile
              </li>
              <li
                className="text-dark p-2 ms-2 w-100 text-start"
                onClick={() => navigate("/cart")}
              >
                My booking
              </li>
              {user?.role == "CAROWNER" && (
                <li
                  className="text-dark p-2 ms-2 w-100 text-start"
                  onClick={() => navigate("/mycar")}
                >
                  My car
                </li>
                
              )}
              {user?.role == "CAROWNER" && (
                <li
                  className="text-dark p-2 ms-2 w-100 text-start"
                  onClick={() => navigate("/addcar")}
                >
                  Add car
                </li>
                
              )}
              <li
                className="text-dark p-2 ms-2 w-100 text-start"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </nav>
  );
};
