import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import TransactionPreview from "./TransactionPreview";
import './TransactionList.css';
import TotalSpent from "./TotalSpent";

const TransactionList = () => {
    const { filteredTransactions } = useContext(TransactionContext);

    if (!filteredTransactions) return <p>Loading...</p>;

    filteredTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <div className="transaction-list">
            <div className="transaction-list-title">
                <h2>Retailer</h2>
                <h2>Amount</h2>
                <h2>Date</h2>
                <h2>Actions</h2>
            </div>
            {filteredTransactions.map((transaction) => {
                return (
                    <TransactionPreview key={transaction.id} transaction={transaction} />
                );
            })}
            <TotalSpent />
        </div>
    );
}

export default TransactionList;