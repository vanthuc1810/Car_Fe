import { useState, useEffect } from "react";
import { withDrawApi,topUpApi, getWalletDetails } from "../../../api/wallet-api/wallet-api";
import toast from "react-hot-toast";
export const Wallet = ({user}) => {
    const [amount, setAmount] = useState(0);
    const [walletDetais, setWalletDetails] = useState(null);
    const handleWithDraw = () => {
        const data = {
            userId: user?.iduser,
            amount: parseFloat(amount)
        }        
        alert("Xac nhan rut tien");

        withDrawApi(data, localStorage.getItem("authToken")).then(res => toast.success("Rút tiền thành công!"));
        window.location.href = '/myInfo';

      };
      const handleTopUp = () => {
        const data = {
            userId: user?.iduser,
            amount: parseFloat(amount)
        }    
        alert("Xac nhan nap tien");
        topUpApi(data, localStorage.getItem("authToken")).then(res => toast.success("Nạp tiền thành công!"));
        window.location.href = '/myInfo';
      };
      const handleChangeAmount = (e) => {
        setAmount(e.target.value);
      }

      useEffect(() => {
        getWalletDetails();
      },[walletDetais])

    return (
        <div className="container py-2">
              <div className="row text-center d-flex justify-content-center">
                <h3 className="mb-1 mb-2 text-success">
                  Wallet: ${user?.wallet}
                </h3>
                <div className="col-8 d-flex flex-column justify-content-start">
                  <label htmlFor="amount">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    min={100}
                    onChange={handleChangeAmount}
                    className="w-100 py-2 px-4"
                  />
                </div>
                <div className="col-8 mt-2">
                  <div className="row">
                    <div className="col-6">
                      <button
                        className="btn btn-dark w-100"
                        onClick={handleWithDraw}
                      >
                        Withdraw
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn btn-dark w-100"
                        onClick={handleTopUp}
                      >
                        Top-Up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    );
}