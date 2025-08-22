import { TransactionContext } from "../context/TransactionContext";
import trashIcon from "../icons/trash.png";
import { useContext } from "react";
import "./TransactionPreview.css";

const TransactionPreview = ({ transaction }) => {
  const { transactions, setTransactions } = useContext(TransactionContext);

  const deleteHandler = (id) => {
    fetch(
      `https://spending-tracker-backend-production.up.railway.app/api/v1/transactions/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    ).then((res) => {
      if (res.ok) {
        setTransactions((prev) => prev.filter((t) => t.id !== id));
      } else {
        alert("Error deleting");
      }
    });
  };

  return (
    <div className="transaction-preview">
      <div className="cell">{transaction.retailer}</div>
      <div className="cell">{Number(transaction.amount).toFixed(2)}</div>
      <div className="cell">{transaction.date.toLocaleDateString()}</div>
      <button
        className="trash-button"
        onClick={() => {
          deleteHandler(transaction.id);
        }}
      >
        <img src={trashIcon} alt="trash bin" />
      </button>
    </div>
  );
};

export default TransactionPreview;
