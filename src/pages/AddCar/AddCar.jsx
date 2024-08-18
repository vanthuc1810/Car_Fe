import { useState } from "react";
export const AddCar = () => {
  const [image, setImage] = useState(null);
  const [termOfUse, setTermOfUse] = useState({
    noSmoking: false,
    noPet: false,
    noFoodInCar: false,
    other: false,
  });
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [res, setRes] = useState("");
  // const router = useRouter();

  const convertTermOfUseToString = (termOfUse) => {
    const termsArray = [];

    // Kiểm tra từng thuộc tính và nếu true thì thêm vào mảng
    if (termOfUse.noSmoking) termsArray.push("No Smoking");
    if (termOfUse.noPet) termsArray.push("No Pet");
    if (termOfUse.noFoodInCar) termsArray.push("No Food In Car");
    if (termOfUse.other) termsArray.push("Other");

    // Kết hợp các phần tử của mảng thành một chuỗi, ngăn cách bằng dấu phẩy
    return termsArray.join(", ");
  };

  const [additionalFunctions, setAdditionalFunctions] = useState({
    bluetooth: false,
    gps: false,
    camera: false,
    sunroof: false,
    childLock: false,
    childSeat: false,
    dvd: false,
    usb: false,
  });

  const convertAdditionalFuncitonToString = (additionalFunctions) => {
    const addArray = [];

    // Kiểm tra từng thuộc tính và nếu true thì thêm vào mảng
    if (additionalFunctions.bluetooth) addArray.push("Bluetooth");
    if (additionalFunctions.gps) addArray.push("GPS");
    if (additionalFunctions.camera) addArray.push("Camera");
    if (additionalFunctions.sunroof) addArray.push("Sunroof");
    if (additionalFunctions.childLock) addArray.push("ChildLock");
    if (additionalFunctions.childSeat) addArray.push("ChildSeat");
    if (additionalFunctions.dvd) addArray.push("DVD");
    if (additionalFunctions.usb) addArray.push("USB");
    // Kết hợp các phần tử của mảng thành một chuỗi, ngăn cách bằng dấu phẩy
    return addArray.join(", ");
  };

  const REACT_APP_CLOUDINARY_CLOUD_NAME = "vanthuc";
  const REACT_APP_CLOUDINARY_API_SECRET = "TtV28amUWGGl281c4ACPJASZPgM";
  const REACT_APP_CLOUDINARY_API_KEY = "143549995223456";
  const REACT_APP_CLOUDINARY_UPLOAD_PRESET = "xqpaviob";

  const uploadImage = async () => {
    setLoading(true);
    const data = new FormData();
    if (
      !image ||
      !REACT_APP_CLOUDINARY_UPLOAD_PRESET ||
      !REACT_APP_CLOUDINARY_CLOUD_NAME
    ) {
      console.error("No image selected");
      return;
    }
    data.append("file", image);
    data.append("upload_preset", REACT_APP_CLOUDINARY_UPLOAD_PRESET);
    data.append("cloud_name", REACT_APP_CLOUDINARY_CLOUD_NAME);
    data.append("folder", "Cloudinary-React");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      ).then((res) => res.json());
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      console.error("Error uploading image:", error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  const handleResetClick = () => {
    setPreview(null);
    setImage(null);
  };

  const handleTermOfUseChange = (event) => {
    const { name, checked } = event.target;
    setTermOfUse({
      ...termOfUse,
      [name]: checked,
    });
  };

  const handleAdditionalFunctionsChange = (event) => {
    const { name, checked } = event.target;
    setAdditionalFunctions({
      ...additionalFunctions,
      [name]: checked,
    });
    console.log(additionalFunctions);
  };

  let [formData, setFormData] = useState({
    name: "",
    brand: "",
    model: "",
    color: "",
    numberofseats: "", // Sử dụng chuỗi để tránh lỗi với giá trị số trống
    productionyears: "",
    tranmissiontype: "",
    fueltype: "",
    mileage: "",
    fuelconsumption: "",
    baseprice: "",
    deposite: "",
    address: "",
    descripton: "",
    images: "",
    status: "Available",
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    const newValue =
      type === "number" ? (value === "" ? "" : Number(value)) : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const addTerm = async (idcar) => {
    try {
      const nameterms = convertTermOfUseToString(termOfUse);
      const response = await fetch("http://localhost:8080/car/addterm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Thêm token vào header Authorization
        },
        body: JSON.stringify({ idcar, nameterms }),
      });

      const result = await response.json();
      if (result.message === "Success") {
      } else {
        setRes("Thêm sản phẩm thất bại!!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setRes("Thêm sản phẩm thất bại!!");
    }
  };

  const addAddtional = async (idcar) => {
    console.log(idcar);
    try {
      const namefunctions =
        convertAdditionalFuncitonToString(additionalFunctions);
      const response = await fetch("http://localhost:8080/car/addfunction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Thêm token vào header Authorization
        },
        body: JSON.stringify({ idcar, namefunctions }),
      });

      const result = await response.json();
      if (result.message === "Success") {
      } else {
        setRes("Thêm sản phẩm thất bại!!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setRes("Thêm sản phẩm thất bại!!");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = await uploadImage();
    if (data && data.secure_url) {
      formData.images = data.secure_url;

      try {
        const response = await fetch("http://localhost:8080/car/addcar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Thêm token vào header Authorization
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.message === "Success") {
          const term = await addTerm(result.result.idcar);
          const functions = await addAddtional(result.result.idcar);
          setRes("Thêm thành công...");
          // router.push(`/car_owner/mycar`);
        } else {
          setRes("Thêm sản phẩm thất bại!!");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setRes("Thêm sản phẩm thất bại!!");
      }
    } else {
      setRes("Lỗi khi tải ảnh lên Cloudinary.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h3 className="text-center">Thêm sản phẩm</h3>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Brand</label>
              <input
                type="text"
                className="form-control"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Model</label>
              <input
                type="text"
                className="form-control"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Color</label>
              <input
                type="text"
                className="form-control"
                name="color"
                value={formData.color}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Number of Seats</label>
              <input
                type="number"
                className="form-control"
                name="numberofseats"
                value={formData.numberofseats}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Production Years</label>
              <input
                type="number"
                className="form-control"
                name="productionyears"
                value={formData.productionyears}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Transmission Type</label>
              <input
                type="text"
                className="form-control"
                name="tranmissiontype"
                value={formData.tranmissiontype}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Fuel Type</label>
              <input
                type="text"
                className="form-control"
                name="fueltype"
                value={formData.fueltype}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Mileage</label>
              <input
                type="number"
                className="form-control"
                name="mileage"
                value={formData.mileage}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Fuel Consumption</label>
              <input
                type="text"
                className="form-control"
                name="fuelconsumption"
                value={formData.fuelconsumption}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Base Price</label>
              <input
                type="number"
                className="form-control"
                name="baseprice"
                value={formData.baseprice}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Deposit</label>
              <input
                type="number"
                className="form-control"
                name="deposite"
                value={formData.deposite}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                name="descripton"
                value={formData.descripton}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="row mx-auto">
          <div className="col-12">
            <h4>Terms of Use</h4>
            <label>
              <input
                type="checkbox"
                name="noSmoking"
                checked={termOfUse.noSmoking}
                onChange={handleTermOfUseChange}
              />{" "}
              No smoking
            </label>
            <label>
              <input
                type="checkbox"
                name="noPet"
                checked={termOfUse.noPet}
                onChange={handleTermOfUseChange}
              />{" "}
              No pet
            </label>
            <label>
              <input
                type="checkbox"
                name="noFoodInCar"
                checked={termOfUse.noFoodInCar}
                onChange={handleTermOfUseChange}
              />{" "}
              No food in car
            </label>
            <label>
              <input
                type="checkbox"
                name="other"
                checked={termOfUse.other}
                onChange={handleTermOfUseChange}
              />{" "}
              Other
            </label>
          </div>
          <div className="col-12">
            <h4>Additional Functions</h4>
            <label>
              <input
                type="checkbox"
                name="bluetooth"
                checked={additionalFunctions.bluetooth}
                onChange={handleAdditionalFunctionsChange}
              />{" "}
              Bluetooth
            </label>
            <label>
              <input
                type="checkbox"
                name="gps"
                checked={additionalFunctions.gps}
                onChange={handleAdditionalFunctionsChange}
              />{" "}
              GPS
            </label>
            <label>
              <input
                type="checkbox"
                name="camera"
                checked={additionalFunctions.camera}
                onChange={handleAdditionalFunctionsChange}
              />{" "}
              Camera
            </label>
            <label>
              <input
                type="checkbox"
                name="sunroof"
                checked={additionalFunctions.sunroof}
                onChange={handleAdditionalFunctionsChange}
              />{" "}
              Sunroof
            </label>
            <label>
              <input
                type="checkbox"
                name="childLock"
                checked={additionalFunctions.childLock}
                onChange={handleAdditionalFunctionsChange}
              />{" "}
              Child lock
            </label>
            <label>
              <input
                type="checkbox"
                name="childSeat"
                checked={additionalFunctions.childSeat}
                onChange={handleAdditionalFunctionsChange}
              />{" "}
              Child seat
            </label>
            <label>
              <input
                type="checkbox"
                name="dvd"
                checked={additionalFunctions.dvd}
                onChange={handleAdditionalFunctionsChange}
              />{" "}
              DVD
            </label>
            <label>
              <input
                type="checkbox"
                name="usb"
                checked={additionalFunctions.usb}
                onChange={handleAdditionalFunctionsChange}
              />{" "}
              USB
            </label>
          </div>
        </div>

        <div className="h-screen sm:px-8 md:px-16 sm:py-8">
          <div className="container mx-auto max-w-screen-lg h-full">
            <header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
              <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                <span>Click on Upload a File</span>&nbsp;
              </p>
              <input
                id="hidden-input"
                type="file"
                className="hidden"
                onChange={handleImageChange}
                accept="image/*"
              />
              <label htmlFor="hidden-input" className="cursor-pointer">
                <div className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
                  Upload a file
                </div>
              </label>

              <div className="flex justify-center items-center mt-5 mx-3 max-w-xs">
                {preview && (
                  <div className="col-6">
                    <img src={preview} alt="preview" className="w-100" />
                  </div>
                )}
              </div>
            </header>
            <div className="flex justify-end pb-8 pt-6 gap-4">
              <button
                onClick={handleResetClick}
                className="bg-danger px-4 py-2 px-2 rounded-3 border-0"
              >
                <h6 className="m-0 text-light">Reset</h6>
              </button>
            </div>
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6"></div>
                <span>Processing...</span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {res ? (
          <div className="flex items-center justify-center gap-2">
            <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6"></div>
            <span>{res}</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6"></div>
          </div>
        )}
        <button type="submit" className="btn btn-primary w-100 mt-4">
          Register
        </button>
      </div>
    </form>
  );
};
