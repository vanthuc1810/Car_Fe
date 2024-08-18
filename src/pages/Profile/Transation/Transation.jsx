import { useState, useEffect } from "react";
import {
  withDrawApi,
  topUpApi,
  getWalletDetails,
} from "../../../api/wallet-api/wallet-api";
import "./Transation.scss";
export const Transation = ({ user }) => {
  const [amount, setAmount] = useState(0);
  const [walletDetais, setWalletDetails] = useState(null);
  const handleWithDraw = () => {
    const data = {
      userId: user?.iduser,
      amount: parseFloat(amount),
    };
    console.log(data);

    withDrawApi(data, localStorage.getItem("authToken"));
  };
  const handleTopUp = () => {
    const data = {
      userId: user?.iduser,
      amount: parseFloat(amount),
    };
    console.log(data);

    topUpApi(data, localStorage.getItem("authToken"));
  };
  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    getWalletDetails().then((res) => setWalletDetails(res));
    console.log("transation");
  }, []);
  return (
    <div className="table-container">
        <table className="transactions-table w-100 mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Date time</th>
          <th>Booking No.</th>
          <th>Car Name</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {console.log(walletDetais)}
        {walletDetais?.transactions.map((transaction, index) => (
          <tr key={transaction.idtransactions}>
            <td>{index + 1}</td>
            <td>{transaction.amount.toLocaleString("vi-VN")}</td>
            <td>{transaction.type}</td>
            <td>{new Date(transaction.datetime).toLocaleString()}</td>
            <td>{transaction.bookingno}</td>
            <td>{transaction.carname}</td>
            <td>{transaction.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
