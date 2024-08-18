import { Link, useNavigate } from "react-router-dom";
import "./CategoriesSection.scss";
import { useState } from "react";
import { searchProductApi } from "../../../../api/product-api/searchProductApi";
export const CategoriesSection = () => {

  const [data, setData] = useState({
    address: "",
    startTime: "",
    endTime: ""
  })
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit  =() => {
    searchProductApi(data).then(res => {
      const result = res.result;
      console.log(result);
    
      navigate('/product-listing', { state: { result } });
    });
  }
  return (
    <div className="">
      <h1 className="categories-heading">Search your car</h1>
      <div className="categories-container">
        <div className="container categories-search p-0">
          <div className="row h-100">
            <div className="categories-search-img col-6 h-100">
              <img
                src="https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg"
                alt=""
              />
            </div>
            <div className="search-car-container col-6 d-flex align-items-center justify-content-center flex-column">
              <div className="search-car-container-input w-100">
                <h3 className="text-center">Search car</h3>
                <label htmlFor="address">
                  <h5>Address</h5>
                  <div className="col-10">
                    <input type="text" name="address" id="address" onChange={handleChange} />
                  </div>
                </label>
                <label htmlFor="startTime">
                  <h5>Start date time</h5>
                  <div className="col-10">
                    <input
                      type="datetime-local"
                      name="startTime"
                      id="startTime"
                      onChange={handleChange}
                    />
                  </div>
                </label>
                <label htmlFor="endTime">
                  <h5>End date time</h5>
                  <div className="col-10">
                    <input type="datetime-local" name="endTime" id="endTime" onChange={handleChange}/>
                  </div>
                </label>
              </div>
              <button className="align-self-end search-now-btn" onClick={handleSubmit}>
                <h6 className="m-0">SEARCH</h6>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
